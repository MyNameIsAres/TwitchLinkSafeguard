<script>
    export let domain;
    export let onDelete;

    function deleteDomain() {
        onDelete(domain);
    }
</script>


<div class="Layout-sc-1xcs6mc-0 eoFnxT low-trust-user" style="min-width: 0px;">
    <div class="Layout-sc-1xcs6mc-0 gbuGOy" style="min-width: 0px;">
        <div class="Layout-sc-1xcs6mc-0">
            <div class="Layout-sc-1xcs6mc-0 ezCDBg">
                <p class="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 sghpq jYWWLJ tw-title">
                    {domain}
                </p>
                <div class="Layout-sc-1xcs6mc-0 cVmNmw">
                    <div class="InjectLayout-sc-1i43xsx-0 kBtJDm">
                        <button 
                            aria-label="Ban"
                            class="ScCoreButton-sc-ocjdkq-0 EmXRt"
                            on:click={deleteDomain}
                            >
                            <div class="ScLegacyButtonIconLayout-sc-1tvp3z4-0 bPoAWZ">
                                <div class="ButtonIconFigure-sc-1emm8lf-0 kfblcn">
                                    <div class="ScFigure-sc-wkgzod-0 fewniq tw-svg"><svg width="20" height="20"
                                            viewBox="0 0 20 20" focusable="false" aria-hidden="true"
                                            role="presentation">
                                            <path fill-rule="evenodd"
                                                d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm8 6a6 6 0 0 1-4.904-9.458l8.362 8.362A5.972 5.972 0 0 1 10 16zm4.878-2.505a6 6 0 0 0-8.372-8.372l8.372 8.372z"
                                                clip-rule="evenodd"></path>
                                        </svg></div>
                                </div>
                            </div>
                        </button></div>
                    <div class="Layout-sc-1xcs6mc-0 bYeGkU">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>