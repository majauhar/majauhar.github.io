if ('share' in navigator) {
  for (const shareButton of document.querySelectorAll('[data-share-url]')) {
    shareButton.hidden = false
    shareButton.addEventListener('click', event => {
      const url = shareButton.getAttribute('data-share-url')
      navigator.share({url})
    })
  }
}

// Distill-style layout enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Hide the footnotes list from the bottom of the page
  const footnotesDiv = document.querySelector('.footnotes');
  if (footnotesDiv) {
    footnotesDiv.style.display = 'none';
  }
  // Handle footnotes visibility based on scroll position
  const footnoteRefs = document.querySelectorAll('a[href^="#fn"]');
  const rightPane = document.getElementById('right-pane');
  if (rightPane) {
    const observer = new IntersectionObserver((entries) => {
      let visibleRef = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleRef = entry.target;
        }
      });
      
      if (visibleRef) {
        const a = visibleRef.querySelector('a') || visibleRef;
        const href = a.getAttribute('href');
        const footnote = document.querySelector('[id="' + href.substring(1) + '"]');
        if (footnote) {
          const footnoteContent = footnote.closest('li') || footnote;
          const number = footnote.id.split(':')[1];
          
          // Clone and modify the content to add numbering
          const clonedContent = footnoteContent.cloneNode(true);
          const p = clonedContent.querySelector('p');
          if (p) {
            p.innerHTML = number + '. ' + p.innerHTML;
          }
          
          const fullContent = clonedContent.innerHTML;
          let shortContent = fullContent;
          if (fullContent.length > 150) {
            // Truncate at word boundary in text content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = fullContent;
            const text = tempDiv.textContent || tempDiv.innerText;
            let shortText = text.substring(0, 150);
            const lastSpace = shortText.lastIndexOf(' ');
            if (lastSpace > 0) {
              shortText = shortText.substring(0, lastSpace) + '...';
            } else {
              shortText += '...';
            }
            // Reconstruct HTML with shortened text
            tempDiv.querySelector('p').innerHTML = shortText;
            shortContent = tempDiv.innerHTML;
          }
          rightPane.innerHTML = '<div class="footnote-preview" data-full="' + encodeURIComponent(fullContent) + '" data-short="' + encodeURIComponent(shortContent) + '">' + shortContent + '</div>';
        }
      } else {
        rightPane.innerHTML = '';
      }
    }, { threshold: 0.1 });
    
    footnoteRefs.forEach(ref => {
      observer.observe(ref);
    });

    // Handle hover expansion
    rightPane.addEventListener('mouseenter', function() {
      const preview = rightPane.querySelector('.footnote-preview');
      if (preview) {
        const fullContent = decodeURIComponent(preview.getAttribute('data-full'));
        preview.innerHTML = fullContent;
        preview.classList.add('expanded');
      }
    });
    
    rightPane.addEventListener('mouseleave', function() {
      const preview = rightPane.querySelector('.footnote-preview');
      if (preview) {
        const shortContent = decodeURIComponent(preview.getAttribute('data-short'));
        preview.innerHTML = shortContent;
        preview.classList.remove('expanded');
      }
    });
  }

  // Generate table of contents for left pane on hover
  const leftPane = document.getElementById('left-pane');
  if (leftPane) {
    const headings = document.querySelectorAll('.center-pane h1, .center-pane h2, .center-pane h3, .center-pane h4, .center-pane h5, .center-pane h6');
    let toc = '';
    if (headings.length > 0) {
      toc = '<div class="toc"><h4>Contents</h4><ul>';
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const text = heading.textContent.trim();
        if (text) {
          const id = `toc-heading-${index}`;
          heading.id = id;
          toc += `<li class="toc-level-${level}"><a href="#${id}">${text}</a></li>`;
        }
      });
      toc += '</ul></div>';
    }

    // Set initial empty
    leftPane.innerHTML = '';

    // Show TOC on hover
    leftPane.addEventListener('mouseenter', function() {
      if (toc) {
        leftPane.innerHTML = toc;
      }
    });

    leftPane.addEventListener('mouseleave', function() {
      leftPane.innerHTML = '';
    });
  }

  // Optional: hover preview (commented out as per user preference)
  /*
  const centerPane = document.querySelector('.center-pane');
  if (centerPane && leftPane) {
    centerPane.addEventListener('mouseover', function(e) {
      const target = e.target;
      if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'LI') {
        leftPane.innerHTML = '<div class="hover-content">' + target.textContent.substring(0, 200) + (target.textContent.length > 200 ? '...' : '') + '</div>';
      }
    });
    
    centerPane.addEventListener('mouseout', function() {
      // Restore TOC
      if (article) {
        // Regenerate TOC
      }
    });
  }
  */
});
