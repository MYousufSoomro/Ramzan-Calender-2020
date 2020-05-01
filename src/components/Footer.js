import React from 'react';

function Footer() {
  return (
    <div>
      <br /><br /><br /><br />
      <div className="footer">
        <p>
          Developed by{" "}
          <a
            href="https://www.twitter.com/MYousufSoomro"
            target="_blank"
            rel="noopener noreferrer"
          >
            M Yousuf Soomro
            </a> | &nbsp;
            <a
            href="https://bit.ly/educatement"
            target="_blank"
            rel="noopener noreferrer"
            className="youtubeLink"
          >
            Subscribe
            </a>  YouTube Channel
          </p>
      </div>
    </div>
  );
}

export default Footer;