// @ts-nocheck
import { linkBlockerPopup, linkBlockerStyle } from "./popupTemplate";

function injectStyle() {
  let style = document.getElementById('custom-popup-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'custom-popup-style';
    document.head.appendChild(style);
  }

  style.textContent = linkBlockerStyle;
  document.head.appendChild(style);
}

function injectPopup(url) {
  const targetElement = document.querySelector('.ReactModalPortal')
  const popupElement = document.getElementById('AresPopup');

  if (popupElement) {
    popupElement.remove();
  }

  if (targetElement) {
    targetElement.innerHTML = linkBlockerPopup;
    // targetElement.insertAdjacentHTML('beforeend', linkBlockerPopup);
    let urlLabel = document.getElementById('UrlLabel');
    if (urlLabel) {
      urlLabel.innerText = url;
    }
    addPopupListeners(url);
  }
}

function addPopupListeners(checkedUrl) {
  const popup = document.getElementById('AresPopup');
  const closeButton = document.getElementById('AresCloseButton');
  const cancelButton = document.getElementById('AresCancel');
  const alwaysAllowDomainButton = document.getElementById('AresAllowBox');
  const alwaysBlockDomainButton = document.getElementById('AresBlockBox');
  let redirectButton = document.querySelector('.LeaveTwitch');
  let urlLabel = document.getElementById('UrlLabel');

  let domain = new URL(checkedUrl).hostname;

  let normalizedDomain = normalizeDomain(domain);

  alwaysAllowDomainButton.addEventListener('change', () => {
    storeDomain(normalizedDomain, 'allow', alwaysAllowDomainButton.checked);
    if (alwaysAllowDomainButton.checked) {
      alwaysBlockDomainButton.checked = false;
    }
  });

  alwaysBlockDomainButton.addEventListener('change', () => {
    storeDomain(normalizedDomain, 'block', alwaysBlockDomainButton.checked);
    if (alwaysBlockDomainButton.checked) {
      alwaysAllowDomainButton.checked = false;
    }
  });

  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  cancelButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  redirectButton.addEventListener('click', () => {
    window.open(checkedUrl, '_blank');
    popup.style.display = 'none';
    urlLabel.innerText = "";
  });
}

function getDomainsFromStorage(domain) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(domain, (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result[domain] || []);
      }
    });
  });
}

async function isDomainInAllowedList() {
  return getDomainsFromStorage('allowedDomains');
}

async function isDomainInBlockedList() {
  return getDomainsFromStorage('blockedDomains');
}

async function shouldBlockDomain(domain) {
  let normalizedDomain = normalizeDomain(domain);

  try {
    const [blockedDomains] = await Promise.all([
      isDomainInBlockedList()
    ]);

    if (blockedDomains.includes(normalizedDomain)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("[Twitch Link Blocker] threw an error " + error);
    return false;
  }
}

async function shouldShowPopup(domain) {
  let normalizedDomain = normalizeDomain(domain);
  try {
    const [allowedDomains, blockedDomains] = await Promise.all([
      isDomainInAllowedList(),
      isDomainInBlockedList()
    ]);

    if (allowedDomains.includes(normalizedDomain) || blockedDomains.includes(normalizedDomain)) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("[Twitch Link Blocker] threw an error " + error);
    return false;
  }
}

// TODO: Can use inline if statements
function storeDomain(domain, listType, checked) {
  chrome.storage.local.get(["allowedDomains", "blockedDomains"], (data) => {
    let allowedDomains = data.allowedDomains || [];
    let blockedDomains = data.blockedDomains || [];

    if (listType == 'allow') {
      if (checked && !allowedDomains.includes(domain)) {
        allowedDomains.push(domain);
      } else {
        allowedDomains = allowedDomains.filter(item => item !== domain);
      }
    }

    if (listType == 'block') {
      if (checked && !blockedDomains.includes(domain)) {
        blockedDomains.push(domain);
      } else {
        blockedDomains = blockedDomains.filter(item => item !== domain);
      }
    }
    chrome.storage.local.set({ allowedDomains, blockedDomains }, () => {

      if (chrome.runtime.lastError) {

        console.error("Error saving data:", chrome.runtime.lastError);
      }
    });
  });
}

// TODO move to utility.js?
function hasExactClasses(element, expectedClasses) {
  const elementClasses = Array.from(element.classList);
  return expectedClasses.every(className => elementClasses.includes(className));
}

// TODO move to utility.js?
function normalizeDomain(domain) {
  return domain.replace(/^www./, '');
}

async function handlePopup(url) {
  let normalizedDomain = normalizeDomain(new URL(url).hostname);

  try {
    const showPopup = await shouldShowPopup(normalizedDomain);

    if (showPopup) {
      injectStyle();
      injectPopup(url);
    } else {
      const isDomainBlocked = await shouldBlockDomain(normalizedDomain);
      if (!isDomainBlocked) {
        window.open(url, '_blank');
      }
    }
  } catch (error) {
    console.error("[Twitch Link Blocker] threw an error " + error);
  }
}

async function twitchChatClickHandler() {
  document.addEventListener('click', function (event) {
    let target = event.target;

    const expectedClasses = [
      'ScCoreLink-sc-16kq0mq-0',
      'eFqEFL',
      'link-fragment',
      'tw-link'
    ];

    if (target.tagName === 'A' && hasExactClasses(target, expectedClasses)) {
      event.preventDefault();

      let url = event.target.href;

      handlePopup(url).then(() => {
      }).catch(error => {
        console.error("[Twitch Link Blocker] threw an error " + error);
      })

    }
  });
}

twitchChatClickHandler();

