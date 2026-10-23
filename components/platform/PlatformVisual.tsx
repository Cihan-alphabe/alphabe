const mosaicFill = new Set([17, 25, 57])

const files = [
  "Header.css",
  "Casino-page.css",
  "Deposit-page.css",
  "Register-modal.css",
  "Footer-modal.css",
]

export function PlatformVisual({ visual }: { visual: string }) {
  return (
    <div className="PlatformCard-visual">
      <div className="PlatformCard-mosaic" aria-hidden="true">
        {Array.from({ length: 70 }, (_, index) => (
          <span
            key={index}
            className={mosaicFill.has(index) ? "is-fill" : undefined}
          />
        ))}
      </div>
      <img
        className="PlatformCard-glow"
        src="/images/platform/glow.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="PlatformCard-wash" aria-hidden="true" />

      {visual === "sidebar" ? (
        <div className="PlatformMock PlatformMock--sidebar">
          <div className="PlatformMock-dots">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="PlatformMock-split">
            <div className="PlatformMock-lines">
              <i />
              <i />
            </div>
            <div className="PlatformMock-widget">
              + Add
              <br />
              Widget
            </div>
          </div>
          <div className="PlatformMock-new">NEW SECTION +</div>
        </div>
      ) : null}

      {visual === "widgets" ? (
        <div className="PlatformMock PlatformMock--widgets">
          <div className="PlatformChip PlatformChip--casino">
            <span className="PlatformChip-tag">
              <img src="/images/platform/pic.svg" alt="" />
              Casino
            </span>
            <b>Add Link</b>
          </div>
          <div className="PlatformChip PlatformChip--image">
            <span className="PlatformChip-tag PlatformChip-tag--icon">
              <img src="/images/platform/pic.svg" alt="" />
            </span>
            <b>Add Image</b>
          </div>
          <div className="PlatformChip PlatformChip--group">
            <span className="PlatformChip-tag">
              Group
              <img
                className="PlatformChip-caret"
                src="/images/platform/caret.svg"
                alt=""
              />
            </span>
            <b>Add Group</b>
          </div>
        </div>
      ) : null}

      {visual === "code" ? (
        <div className="PlatformMock PlatformMock--code">
          <div className="PlatformFiles">
            <div className="PlatformFiles-head">
              <img src="/images/platform/folder.svg" alt="" />
              CSS
              <img
                className="PlatformFiles-caret"
                src="/images/platform/folder-caret.svg"
                alt=""
              />
            </div>
            {files.map((file) => (
              <div
                key={file}
                className={
                  file === "Deposit-page.css"
                    ? "PlatformFiles-item is-active"
                    : "PlatformFiles-item"
                }
              >
                <img src="/images/platform/file.svg" alt="" />
                {file}
              </div>
            ))}
          </div>
          <div className="PlatformCode">
            <span className="PlatformCode-badge">
              Code Edit
              <img src="/images/platform/code-edit.svg" alt="" />
            </span>
            <pre>
              <span>{`.platform-section {`}</span>
              {"\n\n"}
              <span>{`  display: `}</span>
              <span className="is-val">grid;</span>
              {"\n"}
              <span>{`  grid-template-columns: `}</span>
              <span className="is-fn">repeat</span>
              <span className="is-val">(3, 1fr);</span>
              {"\n"}
              <span>{`  gap: `}</span>
              <span className="is-val">24px;</span>
              {"\n"}
              <span>{`  max-width: `}</span>
              <span className="is-val">1280px;</span>
              {"\n"}
              <span>{`  margin: `}</span>
              <span className="is-val">0 auto;</span>
              {"\n"}
              <span>{`  padding: `}</span>
              <span className="is-val">64px 32px;</span>
              {"\n\n"}
              <span>{`}`}</span>
            </pre>
          </div>
        </div>
      ) : null}
    </div>
  )
}
