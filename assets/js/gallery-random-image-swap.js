document.addEventListener('DOMContentLoaded', function () {
  // Pool of all available images
  const imagePool = [
    'assets/img/illustrative/Noor_wana_anderson_lab.png',
    'assets/img/illustrative/symposium_poster_session.png',
    'assets/img/illustrative/Validation Lab Emma.png',
    'assets/img/illustrative/PE Fair 2023-16.png',
    'assets/img/illustrative/Integration_day_coffee.png',
    'assets/img/illustrative/Jonathan_pritchard_talk.png',
    'assets/img/illustrative/Kendrew_audience.png',
    'assets/img/illustrative/Noor_wana_hands.png',
    'assets/img/illustrative/Validation Lab Panos.png',
    'assets/img/news/OT10_gallery/david_hulcoop.jpg',
    'assets/img/news/OT10_gallery/fiona_behan.jpg',
    'assets/img/news/OT10_gallery/founders_panel.jpg',
    'assets/img/news/OT10_gallery/gosia_trynka.jpg',
    'assets/img/news/OT10_gallery/PhilMynottPhoto0181.jpg',
    'assets/img/news/OT10_gallery/PhilMynottPhoto0235.jpg',
    'assets/img/news/OT10_gallery/PhilMynottPhoto0259.jpg',
    'assets/img/illustrative/GSEA_UX.png',
    'assets/img/illustrative/UX_session.png',
    'assets/img/illustrative/eQTL_cat_demo.png',
    'assets/img/illustrative/perturbation_cat_demo.png',
    'assets/img/illustrative/poster_session_chat.png',
    'assets/img/illustrative/symposium_2026.png',
    'assets/img/illustrative/symposium_poster_session_jack.png',
    // Add more images as needed
  ];

  // Mapping of image paths to alt text descriptions
  const imageAltText = {
    'assets/img/illustrative/Noor_wana_anderson_lab.png': 'A woman in protective clothing is working under a fume hood in a lab, handling a pipette',
    'assets/img/illustrative/symposium_poster_session.png': 'Symposium poster session with researchers chatting to each other',
    'assets/img/illustrative/Validation Lab Emma.png': 'A woman in protective clothing and a mask is working under a fume hood in a lab, handling a pipette',
    'assets/img/illustrative/PE Fair 2023-16.png': 'Two women are talking to each other at a high table on which sit two screen displaying the Open Targets Platform',
    'assets/img/illustrative/Integration_day_coffee.png': 'A coffee break during a conference, seen from above',
    'assets/img/illustrative/Jonathan_pritchard_talk.png': 'A man stands at the front of a packed auditorium giving a talk',
    'assets/img/illustrative/Kendrew_audience.png': 'A packed auditorium, seen from the front',
    'assets/img/illustrative/Noor_wana_hands.png': 'Hands wearing bright orange gloves handle samples under a fume hood',
    'assets/img/illustrative/Validation Lab Panos.png': 'A man in protective clothing and a mask is working with a multi-channel pipette under a fume hood while a woman stands next to him watching',
    'assets/img/news/OT10_gallery/david_hulcoop.jpg': 'A man stands at a lectern in a conference centre, smiling at the audience. The lectern features the Open Targets logo and the edge of the presentation behind him reads "Founding Member Panel"',
    'assets/img/news/OT10_gallery/fiona_behan.jpg': 'A woman stands smiling behind a lectern with the Open Targets logo on a stage. The presentation projected behind her shows news clippings and photos.',
    'assets/img/news/OT10_gallery/founders_panel.jpg': 'Five people sit in chairs on a stage. They are looking to the left, to the person holding a microphone, who is clearly in the middle of asking a question to one of the panellists.',
    'assets/img/news/OT10_gallery/gosia_trynka.jpg': 'A woman stands at a lectern with the Open Targets logo in a conference centre. The presentation projected behind her shows large numbers describing the collaboration.',
    'assets/img/news/OT10_gallery/PhilMynottPhoto0181.jpg': 'Two women are laughing, while one points at a scientific poster on the wall.',
    'assets/img/news/OT10_gallery/PhilMynottPhoto0235.jpg': 'A group of three people is having a discussion in front of a scientific poster display, during a busy networking session',
    'assets/img/news/OT10_gallery/PhilMynottPhoto0259.jpg': 'Four people, including one in a wheelchair, are having a discussion in front of a wall of scientific posters',
    'assets/img/illustrative/GSEA_UX.png': 'A group of people sit around a table with laptops, paper, and post-its, watching a woman who is presenting a screen at the front of the room',
    'assets/img/illustrative/UX_session.png': 'A group of people sit working at laptops, with paper and colourful post-its on the table between them',
    'assets/img/illustrative/eQTL_cat_demo.png': 'A group of people stand around a high table where two screens are showing a scientific database. One person is in the middle of an explanation to the others',
    'assets/img/illustrative/perturbation_cat_demo.png': 'A person with a laptop and screen is giving the other a demonstration of the Perturbation Catalogue database.',
    'assets/img/illustrative/poster_session_chat.png': 'Three people are stood chatting to one another during a busy poster session',
    'assets/img/illustrative/symposium_2026.png': 'Seen from above, a large group of conference attendees look up and smile at the camera',
    'assets/img/illustrative/symposium_poster_session_jack.png': 'Two people holding coffee cups are chatting and smiling during a scientific poster session',
  };

  // Generate gallery items dynamically
  function generateGallery() {
    const gallery = document.getElementById('science-gallery');
    const numItems = 3;

    for (let i = 0; i < numItems; i++) {
      const item = document.createElement('div');
      item.className = 'ot-image-gallery-item';

      const img = document.createElement('img');
      img.alt = `Gallery image ${i + 1}`; // Will be updated by initializeGallery

      item.appendChild(img);
      gallery.appendChild(item);
    }

    return document.querySelectorAll('.ot-image-gallery-item img');
  }

  const galleryItems = generateGallery();

  // Track currently displayed images to prevent duplicates
  const currentImages = new Set();

  // Function to get random time between 8-15 seconds
  function getRandomInterval() {
    return Math.floor(Math.random() * 7000) + 8000; // 8000-15000ms
  }

  // Initialize gallery with random images
  function initializeGallery() {
    const shuffledPool = [...imagePool].sort(() => Math.random() - 0.5);

    galleryItems.forEach(function (img, index) {
      const randomImage = shuffledPool[index % shuffledPool.length];
      img.src = window.siteBaseUrl + '/' + randomImage;
      img.alt = imageAltText[randomImage] || 'Gallery image'; // Set alt text
      currentImages.add(randomImage);
    });
  }

  // Function to swap a single image
  function swapSingleImage(imgElement) {
    // Use pathname to normalise browser-expanded URLs back to relative paths
    const currentSrc = new URL(imgElement.src).pathname;
    // Remove base URL from currentSrc for comparison
    const relativePath = currentSrc.replace(window.siteBaseUrl + '/', '');
    currentImages.delete(relativePath);

    const availableImages = imagePool.filter(img => !currentImages.has(img));

    let newImage;
    if (availableImages.length > 0) {
      newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
    } else {
      newImage = imagePool[Math.floor(Math.random() * imagePool.length)];
    }

    imgElement.style.opacity = '0';

    setTimeout(() => {
      imgElement.src = window.siteBaseUrl + '/' + newImage;
      imgElement.alt = imageAltText[newImage] || 'Gallery image'; // Update alt text
      imgElement.style.opacity = '1';
      currentImages.add(newImage);
    }, 300);
  }

  // Initialize with random images
  initializeGallery();

  // Set up independent timer for each image
  galleryItems.forEach(function (img) {
    function scheduleNextSwap() {
      const randomTime = getRandomInterval();
      setTimeout(function () {
        swapSingleImage(img);
        scheduleNextSwap(); // Schedule next swap with new random time
      }, randomTime);
    }

    // Start with random initial delay so they don't all swap at once
    const initialDelay = Math.random() * 2000;
    setTimeout(scheduleNextSwap, initialDelay);
  });
});