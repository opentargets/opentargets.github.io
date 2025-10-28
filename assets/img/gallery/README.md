# Gallery Images

## How to add images to the carousel:

1. **Add your image files** to this folder (`assets/img/gallery/`)
   - Supported formats: `.jpg`, `.png`, `.gif`
   - Recommended size: at least 800px width
   - Best aspect ratio: both horizontal (landscape) and vertical (portrait) work

2. **Update the data file** `_data/hackathon/gallery.yml`
   - Add an entry for each new image
   - Include: filename, title, caption, and category

3. **Example entry:**
```yaml
- filename: "my-photo.jpg"
  title: "Event Photo"
  caption: "Description of the photo"
  category: "Event"
```

## How it works:

- The carousel automatically displays 4 images per slide
- Images are taken from the `gallery.yml` data file
- If an image file is missing, a placeholder icon will be shown instead
- The carousel will create as many slides as needed based on the number of images

