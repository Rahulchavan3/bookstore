import { useState } from 'react';

const AddNew = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(''); 
  const [isPending, setIsPending] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const book = {
      title,
      author,
      description,
      price,
      publicationDate,
      genre,
      image
    };

    fetch('https://bookstore-guh5.onrender.com/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to save book');
      }
      console.log('New Book Added!');
      setIsPending(false);
    })
    .catch((err) => {
      console.error('Failed to save book:', err);
      setIsPending(false);
    });
  };

  const handleImageChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Set image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      // Upload image to ImgBB
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=a3ed3217cf5d2ff0c53df3aeec92a76d', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setImage(data.data.url); // Store image URL
        } else {
          throw new Error('Failed to upload image');
        }
      } catch (err) {
        console.error('Image upload failed:', err);
      }
    }
  };

  return (
    <div className='create'>
      <h2 className="heading">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Book Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />  

        <label>Book Description:</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Book Publication Date:</label>
        <input
          type="date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />

        <label>Book Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />

        <label>Book Image:</label>
        <input
          type='file'
          onChange={handleImageChange}
          accept='image/*' // Limit to image files
        />

        {imagePreview && (
          <div className='image-preview'>
            <img
              src={imagePreview}
              alt='Book Preview'
            />
          </div>
        )}

        <label>Book Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {!isPending && <button>Add Book</button>}
        {isPending && <button disabled>Adding Book...</button>}
      </form>
    </div>
  );
};

export default AddNew;
