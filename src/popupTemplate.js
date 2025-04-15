export const linkBlockerPopup = 
`
<div id="AresPopup" class="ReactModal__Overlay ReactModal__Overlay--after-open modal__backdrop js-modal-backdrop">
    <div class="ReactModal__Content ReactModal__Content--after-open modal__content" tabindex="-1" role="dialog"
        aria-label="Modal" aria-modal="true" aria-labelledby="modal-root-header"
        aria-describedby="modal-description-id">
        <div class="Layout-sc-1xcs6mc-0 bjPIuI modal-wrapper__backdrop modal-wrapper__backdrop--info" style="
            display: flex;
            justify-content: center;
            align-items: flex-start;
            height: 100%;
            width: 100%;
        
        ">
            <div class="Layout-sc-1xcs6mc-0 hEzALl modal-wrapper__content modal-wrapper__content--info" style="
    display: flex !important;
    -webkit-box-flex: 0 !important;
    flex-grow: 0 !important;
    -webkit-box-pack: center !important;
    justify-content: center !important;
    position: relative !important;
    width: 100% !important;
            ">
                <div role="dialog" class="Layout-sc-1xcs6mc-0 ScModalWrapper-sc-1k48se-0 basic detail tw-modal"
                    aria-modal="true" aria-labelledby="Hi8GedvSSfpnwQFTPwjQgnUXBbk2yPQM-header"
                    aria-describedby="Hi8GedvSSfpnwQFTPwjQgnUXBbk2yPQM-body"
         
                    
                    ">
                    <div class="Layout-sc-1xcs6mc-0 kQfqRL" style="
                        background-color: #18181b;
                        padding: 2rem;
                        border-radius: 0.4rem;
                        position: relative;
                    ">
                        <div class="Layout-sc-1xcs6mc-0 kbdfeJ">
                            <p id="modal-root-header"
                                class="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 jEihBm bzDGwQ tw-title"
                                title="Unfollow AlveusSanctuary?"
                                style="
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    line-height: 1.2;
                                    font-size: 1.8rem;
                                    font-weight: 600;

                                "
                                
                                >Leave Twitch?</p>
                        </div>
                        <div class="Layout-sc-1xcs6mc-0 fVVtoX">
                            <p class="CoreText-sc-1txzju1-0">You are about to leave Twitch and go to the following URL:
                            </p>
                        </div>
                        <div class="Layout-sc-1xcs6mc-0 fVVtoX"><label id="UrlLabel" class=""></label>
                        </div>

                        <div class="Layout-sc-1xcs6mc-0 bBYTep" style="
                            display: flex !important;
                            justify-content: space-between !important;
                        ">
                            <div class="Layout-sc-1xcs6mc-0 hgdWfv" style="
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 10px;
">
                                <div
                                    class="Layout-sc-1xcs6mc-0 ScCheckboxLayout-sc-1wg5med-0 cwtKyw cVQYqI tw-checkbox">
                                    <input class="ScCheckBoxInputBase-sc-vu7u7d-1 cTOIOv AresInputBox tw-checkbox__input"
                                        type="checkbox" data-a-target="tw-checkbox"
                                        id="AresAllowBox" 
><label id="AresAlwaysAllow" class="ScCheckBoxLabelBase-sc-vu7u7d-2 ScCheckBoxLabel-sc-1wg5med-1 jnKgax jNMwpg AresCheckbox tw-checkbox__label"
                                        for="AresAllowBox">
                                        <div class="Layout-sc-1xcs6mc-0" style="
     margin-left: 0.5rem; 
">Allow domain</div>
                                    </label></div>
                                <div
                                    class="Layout-sc-1xcs6mc-0 ScCheckboxLayout-sc-1wg5med-0 cwtKyw cVQYqI tw-checkbox">
                                    <input class="ScCheckBoxInputBase-sc-vu7u7d-1 cTOIOv AresInputBox tw-checkbox__input"
                                        type="checkbox" data-a-target="tw-checkbox"
                                        id="AresBlockBox"
><label id="AresAlwaysBlock" class="ScCheckBoxLabelBase-sc-vu7u7d-2 ScCheckBoxLabel-sc-1wg5med-1 jnKgax jNMwpg AresCheckbox tw-checkbox__label"
                                        for="AresBlockBox">
                                        <div class="Layout-sc-1xcs6mc-0" style="
    margin-left: 0.5rem; 
">Block domain</div>
                                    </label></div>
                            </div>

                            <div class="around-button" style="
    display: flex;
    justify-content:  flex-end;
    align-items: center;
"><button id="AresCancel" class="ScCoreButton-sc-ocjdkq-0 ScCoreButtonSecondary-sc-ocjdkq-2 cancel cegTsp ">
                                    <div class="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                                        <div data-a-target="tw-core-button-label-text"
                                            class="Layout-sc-1xcs6mc-0 bFxzAY">No, cancel</div>
                                    </div>
                                </button>
                                <div style="
                                margin-left: 1rem !important;
                            ">
                              
                                <button class="LeaveTwitch">
                                    <div style="
                                    display: flex;
                                    align-items: center;
                                    flex-grow: 0;
                                    padding: 0rem 1rem 0rem 1rem;
                            
                                    ">
                                        <div style="
                                        flex-grow: 0;
                                        display: flex;
                                        align-items: center;
                                        justify-content: flex-start;
                                        
                                        ">Leave Twitch</div>
                                    </div>
                                </button>
                               
                            </div>
                            </div>
                        </div>
                        <div class="modal__close-button modal__close-button--inset"><button id="AresCloseButton"
                                class="ScCoreButton-sc-ocjdkq-0 ljgEdo ScButtonIcon-sc-9yap0r-0 eSFFfM"
                                aria-label="Close modal" data-a-target="modalClose">
                                <div class="ButtonIconFigure-sc-1emm8lf-0 buvMbr">
                                    <div class="ScFigure-sc-wkgzod-0 fewniq tw-svg"><svg width="20" height="20"
                                            viewBox="0 0 20 20" focusable="false" aria-hidden="true"
                                            role="presentation">
                                            <path
                                                d="M8.5 10 4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z">
                                            </path>
                                        </svg></div>
                                </div>
                            </button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`

export const linkBlockerStyle = 
`
#UrlLabel {
    display: inline-flex;
    width: 100%;
    height: auto;             /* Allow height to adjust based on the content */
    font-size: 1.4rem;
    font-family: inherit;
    appearance: none;
    background-clip: padding-box;
    line-height: 1.5;
    border-radius: 0.4rem;
    transition: border 100ms ease-in, background-color 100ms ease-in;
    border-style: solid;
    border-width: 0px;
    border-color: transparent;
    color: #efeff1;
    background-color: rgba(83, 83, 95, 0.38);
    padding: 0.7rem 1rem;
    margin: 5px 0px 5px 0px;
    font-weight: bold;

    white-space: normal;      /* Allow wrapping onto the next line */
    word-wrap: break-word;    /* Break long words/URLs onto the next line */
}


      .AresInputBox {
        width: 0.1rem;
        height: 0.1rem;
        border: none;
        clip: rect(0px, 0px, 0px, 0px);
        overflow: hidden;
        padding: 0px;
        position: absolute;
        color: #f7f7f8;
      }

      .AresCheckbox {
        border-radius: 0.4rem;
        display: block;
        position: relative;
        padding: 0 0 0 1.6rem;
        cursor: pointer;
        color: #f7f7f8;
      }

      .AresCheckbox::before {
        border-radius: 0.2rem;
      }

  
      #AresAllowBox:checked + label::before {
        background-color: #000000;
        border-color: #9147ff
      }

      #AresAllowBox:checked + label::after {
        background-color: #9147ff
      }

      #AresBlockBox:checked + label::before {
        background-color: #000000;
        border-color: #9147ff
      }

      #AresBlockBox:checked + label::after {
        background-color: #9147ff
      }      

      .AresCheckbox::before {
        border-style: solid;
        border-width: 2px;
        border-color: rgba(222, 222, 222, 0.95);
        position: absolute;
        left: 0px;
        width: 1.6rem;
        height: 1.6rem;
        box-sizing: border-box;
        background-clip: padding-box;
        content: "";
        top: 50%;
        margin-top: calc(-1* 1.6rem / 2);
      }

    .AresCheckbox::after {
      display: block;
      content: "";
      position: absolute;
      width: calc(1.5rem / 2);
      height: calc(1.5rem / 2);
      top: 50%;
      --checkbox-fill-transform-x: calc(-1*(1.6rem - 1.6rem / 4));
      transform: translate3d(var(--checkbox-fill-transform-x), -50%, 0);
    }

    .AresCheckbox:hover::before {
      border-color: #ffffff;
    }

    .basic {
        display: flex;
        flex-direction: column;
        background-color: #18181b;
        border-radius: 0.6rem;
        width: 100%;
    }

    .detail {
        max-height: 100%;
        max-width: 60rem;
    }

    .cancel {
      display: inline-flex;
      position: relative;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      vertical-align: middle;
      overflow: hidden;
      text-decoration: none;
      white-space: nowrap;
      user-select: none;
      font-weight: var(--font-weight-semibold);
      font-size: var(--button-text-small);
      height: var(--button-size-small);
      border-radius: var(--input-border-radius-small);
      background-color: var(--color-background-button-secondary-default);
      color: var(--color-text-button-secondary);
    }

    .LeaveTwitch {
        text-decoration:none;
        cursor: pointer;
        background-color: #9147ff;
        color: #ffffff;
        display: inline-flex;
        position: relative;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        overflow: hidden;
        text-decoration: none;
        user-select: none;
        font-weight: 600;
        font-size: 1.2rem;
        height: 2.4rem;
        border-radius: 0.2rem;
    }

    .LeaveTwitch:hover {
      text-decoration: none;
      color: inherit;
      background-color: #9147ff
    
    }
`