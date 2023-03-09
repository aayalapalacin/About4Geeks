import React from 'react'

function Modal() {
  return (
    <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" id="modal-show1" role="document">
    <div class="modal-content">
      <div>

        <div class="modal-header border-0 pb-0">
          <h3 class="text-center mt-4">
            Share your commitment to code every day for 100 days:
          </h3>
          <button
            type="button"
            class="modal-close"
            id="close-share"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body social-share pt-0">
          <a
            href="https://twitter.com/intent/tweet/?text=I%20am%20publicly%20committing%20to%20the%20%23100DaysOfCode%20with%20%404GeeksAcademy!&amp;url=https%3A%2F%2Fsep.4geeksacademy.co%2F"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Twitter"
            title="Share on Twitter"
            class="sc-bwzfXH ewcqji"
            ><div class="sc-bdVaJa sc-bxivhb fWYWWZ" style={{"margin-left": "0px"}}>
              <div aria-hidden="true" class="sc-htpNat cgeQjm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"
                  ></path>
                </svg>
                <span>Twitter</span>
              </div>
            </div></a><a
            href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsep.4geeksacademy.co%2F"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Facebook"
            title="Share on Facebook"
            class="sc-bwzfXH ewcqji"
            ><div class="sc-bdVaJa sc-ifAKCX jzuEBQ">
              <div aria-hidden="true" class="sc-htpNat cgeQjm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11.5"></circle>
                  <path
                    d="M15.84 9.5H13.5V8.48c0-.53.35-.65.6-.65h1.4v-2.3h-2.35c-2.3 0-2.65 1.7-2.65 2.8V9.5h-2v2h2v7h3v-7h2.1l.24-2z"
                  ></path>
                </svg>
                <span>Facebook</span>
              </div>
            </div></a><a
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fsep.4geeksacademy.co%2F&amp;title=I%20am%20publicly%20committing%20to%20the%20%23100DaysOfCode%20with%20%404GeeksAcademy!&amp;summary=I%20am%20publicly%20committing%20to%20the%20%23100DaysOfCode%20with%20%404GeeksAcademy!&amp;source=https%3A%2F%2Fsep.4geeksacademy.co%2F"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on LinkedIn"
            title="Share on LinkedIn"
            class="sc-bwzfXH ewcqji"
            ><div class="sc-bdVaJa sc-dnqmqq dWbQzG">
              <div aria-hidden="true" class="sc-htpNat cgeQjm">
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  enable-background="new 0 0 24 24"
                  xml:space="preserve"
                >
                  <path
                    d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z"
                  ></path>
                </svg>
                <span>LinkedIn</span>
              </div>
            </div></a><a
            href="https://reddit.com/submit/?url=https%3A%2F%2Fsep.4geeksacademy.co%2F"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Reddit"
            title="Share on Reddit"
            class="sc-bwzfXH ewcqji"
            ><div
              class="sc-bdVaJa sc-iwsKbI buVPmO"
            //   style={{background: rgb(255, 61, 30); margin-right: 0px}}
            >
              <div aria-hidden="true" class="sc-htpNat cgeQjm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="9.391" cy="13.392" r=".978"></circle>
                  <path
                    d="M14.057 15.814c-1.14.66-2.987.655-4.122-.004-.238-.138-.545-.058-.684.182-.13.24-.05.545.19.685.72.417 1.63.646 2.568.646.93 0 1.84-.228 2.558-.642.24-.13.32-.44.185-.68-.14-.24-.445-.32-.683-.18zM5 12.086c0 .41.23.78.568.978.27-.662.735-1.264 1.353-1.774-.2-.207-.48-.334-.79-.334-.62 0-1.13.507-1.13 1.13z"
                  ></path>
                  <path
                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.673 14.055c.01.104.022.208.022.314 0 2.61-3.004 4.73-6.695 4.73s-6.695-2.126-6.695-4.74c0-.105.013-.21.022-.313C4.537 13.73 4 12.97 4 12.08c0-1.173.956-2.13 2.13-2.13.63 0 1.218.29 1.618.757 1.04-.607 2.345-.99 3.77-1.063.057-.803.308-2.33 1.388-2.95.633-.366 1.417-.323 2.322.085.302-.81 1.076-1.397 1.99-1.397 1.174 0 2.13.96 2.13 2.13 0 1.177-.956 2.133-2.13 2.133-1.065 0-1.942-.79-2.098-1.81-.734-.4-1.315-.506-1.716-.276-.6.346-.818 1.395-.88 2.087 1.407.08 2.697.46 3.728 1.065.4-.468.987-.756 1.617-.756 1.17 0 2.13.953 2.13 2.13 0 .89-.54 1.65-1.33 1.97z"
                  ></path>
                  <circle cx="14.609" cy="13.391" r=".978"></circle>
                  <path
                    d="M17.87 10.956c-.302 0-.583.128-.79.334.616.51 1.082 1.112 1.352 1.774.34-.197.568-.566.568-.978 0-.623-.507-1.13-1.13-1.13z"
                  ></path>
                </svg>
                <span>Reddit</span>
              </div>
            </div></a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Modal