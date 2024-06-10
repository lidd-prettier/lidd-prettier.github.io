import React, { useEffect } from 'react';

const InstagramEmbed = ({ embedHtml }) => {
  useEffect(() => {
    // Function to load Instagram embed script
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          window.instgrm.Embeds.process();
        };
      }
    };

    // Load Instagram embed script
    loadInstagramEmbed();

    return () => {
      // Clean up by removing the script
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [embedHtml]);

  return (
    <div
      className="instagram-embed"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    ></div>
  );
};

export default InstagramEmbed;
