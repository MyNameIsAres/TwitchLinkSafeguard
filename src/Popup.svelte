<script>
// @ts-nocheck
import {allowedDomainsKey, blockedDomainsKey} from './config.js';
import DomainItem from "./DomainItem.svelte";

let allowedDomains = [];
let blockedDomains = [];

let activeList = 'allowed';

function fetchAllowedDomains() {
    chrome.storage.local.get([allowedDomainsKey], (data) => {
        allowedDomains = [...(data.allowedDomains || [])];
    });
}

function fetchBlockedDomains() {
    chrome.storage.local.get([blockedDomainsKey], (data) => {
        blockedDomains = [...(data.blockedDomains || [])];
    });
}

function showAllowedDomains() {
    activeList = 'allowed'
}

function showBlockedDomains() {
    activeList = 'blocked'
}

function deleteDomain(domain) {
    if (activeList === 'allowed') {
        allowedDomains = allowedDomains.filter(item => item !== domain);
        chrome.storage.local.get([allowedDomainsKey], (data) => {
            chrome.storage.local.set({ allowedDomains }, () => {          
                if (chrome.runtime.lastError) {     
                    console.error("Error saving updated lists:", chrome.runtime.lastError);
                } else {
                    console.log(`Domain "${domain}" removed from allowed list.`);
                }
            });
        });
    } else {
        blockedDomains = blockedDomains.filter(item => item !== domain);
        chrome.storage.local.get([blockedDomainsKey], (data) => {
            chrome.storage.local.set({ blockedDomains }, () => {          
                if (chrome.runtime.lastError) {     
                    console.error("Error saving updated lists:", chrome.runtime.lastError);
                } else {
                    console.log(`Domain "${domain}" removed from blocked list.`);
                }
            });
        })  
    }
}

fetchAllowedDomains();
fetchBlockedDomains();    
</script>
  
<main>
    <div role="region" class="region modview-dock-widget__preview" style="height: 310px; width: 300px;">
      <div class="Layout-sc-1xcs6mc-0 fZguSn">
          <div class="Layout-sc-1xcs6mc-0 OdqLK mod-view-panel-header" data-a-target="mosaic-panel-header">
              <div class="Layout-sc-1xcs6mc-0 emZHDu">
                  <h3 title="Suspicious User Activity" class="CoreText-sc-1txzju1-0 gUAGvn">
                      Manage domains
                  </h3>
              </div>
          </div>
          <div class="Layout-sc-1xcs6mc-0 modview-dock-widget__preview__body">
              <div>
                  <div class="Layout-sc-1xcs6mc-0 hALesN">
                      <div class="scrollable-area" data-simplebar="init">
                          <div class="simplebar-track vertical" style="visibility: hidden;">
                              <div class="simplebar-scrollbar" style="top: 2px; height: 224px;"></div>
                          </div>
                          <div class="simplebar-track horizontal" style="visibility: hidden;">
                              <div class="simplebar-scrollbar"></div>
                          </div>
                          <div class="simplebar-scroll-content" style="padding-right: 17px; margin-bottom: -30px;">
                              <div class="simplebar-content" style="padding-bottom: 15px; margin-right: -15px;">
                                  <div class="Layout-sc-1xcs6mc-0 cHwpra">
                                      <div class="Layout-sc-1xcs6mc-0 erwGGX"></div>
                                      <div class="Layout-sc-1xcs6mc-0 gsDkeW"
                                          style="min-width: 30rem; position: relative;">
                                          <div class="resize-detector">
                                              <div class="resize-detector">
                                                  <div class="resize-detector__grow"
                                                      style="width: 100000px; height: 100000px;"></div>
                                              </div>
                                              <div class="resize-detector">
                                                  <div class="resize-detector__shrink"></div>
                                              </div>
                                          </div>
                                          <div class="Layout-sc-1xcs6mc-0 gvrLBv">
                                              <div class="Layout-sc-1xcs6mc-0 irNJTo tw-tabs">
                                                  <ul role="tablist"
                                                      class="Layout-sc-1xcs6mc-0 ScScrollArea-sc-17qqzr5-0 dclPEi chpVl">
                                                      <li 
                                                        id="TestAllowDomainList" 
                                                        role="presentation" 
                                                        class="Layout-sc-1xcs6mc-0 kpuPa-D"
                                                        class:activeButton={activeList === 'allowed'}
                                                        class:kpuPa-D={activeList === 'allowed'}
                                                        class:fWhaYq={activeList !== 'allowed'}>
                                                          <button 
                                                            id="TestAllowDomainButton" 
                                                            data-index="0" role="tab" 
                                                            aria-selected="true"
                                                            tabindex="0" 
                                                            class="ScInteractive-sc-iekec1-0 cmTyEs"
                                                            on:click={showAllowedDomains}>
                                                              <div class="Layout-sc-1xcs6mc-0 brVIzA">
                                                                  <div
                                                                      class="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb">
                                                                      <div class="Layout-sc-1xcs6mc-0 ktLpvM">
                                                                          <div class="Layout-sc-1xcs6mc-0 bYeGkU">
                                                                          </div>
                                                                          <p
                                                                              id="AllowedCounter"
                                                                              class="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 sghpq jYWWLJ tw-title">
                                                                              Allowed ({allowedDomains.length})</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </button>
                                                          <div id="TestAllowDomainUnderscore" class="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 fRWndA AHHvK">
                                                            <div class="ScActiveIndicator-sc-15g6065-0 blipaW" style="display: {activeList === 'allowed' ? 'block' : 'none'}"></div>
                                                          </div>
                                                      </li>
                                                      <li 
                                                        id="TestBlockedDomainList" 
                                                        role="presentation" 
                                                        class:activeButton={activeList === 'blocked'} 
                                                        class="Layout-sc-1xcs6mc-0"
                                                        class:kpuPa-D={activeList === 'blocked'}
                                                        class:fWhaYq={activeList !== 'blocked'}>
                                                         <button 
                                                            id="TestBlockedDomainButton" 
                                                            data-index="1" 
                                                            role="tab" 
                                                            aria-selected={activeList === 'blocked'} 
                                                            tabindex={activeList === 'blocked' ? "0" : "-1"} 
                                                            class="ScInteractive-sc-iekec1-0 cmTyEs"
                                                            on:click={showBlockedDomains}>
                                                              <div class="Layout-sc-1xcs6mc-0 brVIzA">
                                                                  <div
                                                                      class="Layout-sc-1xcs6mc-0 ScTextWrapper-sc-iekec1-1 gyvaIN eMPFcb">
                                                                      <div class="Layout-sc-1xcs6mc-0 ktLpvM">
                                                                          <div class="Layout-sc-1xcs6mc-0 bYeGkU">
                                                                          </div>
                                                                          <p
                                                                              id="BlockedCounter"
                                                                              class="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 sghpq jYWWLJ tw-title">
                                                                              Blocked ({blockedDomains.length})</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </button>
                                                          <div id="TestBlockedDomainUnderscore" class="Layout-sc-1xcs6mc-0 ScTabIndicatorLayout-sc-iekec1-2 fRWndA AHHvK">
                                                            <div class="ScActiveIndicator-sc-15g6065-0 blipaW" style="display: {activeList === 'blocked' ? 'block' : 'none'}"></div>
                                                          </div>
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="InjectLayout-sc-1i43xsx-0 hWukFy tw-transition-group">
                                              <div class="ScTransitionBase-sc-hx4quq-0 dtAmne tw-transition"
                                                  aria-hidden="false"
                                                  style="transition-property: transform, opacity; transition-timing-function: ease;">
                                                  <div id="outer-div" class="ScTransitionBase-sc-hx4quq-0 eUgyV tw-transition"
                                                      aria-hidden="false">
                                                    {#if activeList === 'allowed'}
                                                        {#each allowedDomains as allowedDomain}
                                                            <DomainItem domain={allowedDomain} onDelete={deleteDomain} />
                                                        {/each}
                                                    {:else} 
                                                    {#each blockedDomains as blockedDomain}
                                                        <DomainItem domain={blockedDomain} onDelete={deleteDomain} />
                                                        {/each}
                                                    {/if}
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</main>
  
  