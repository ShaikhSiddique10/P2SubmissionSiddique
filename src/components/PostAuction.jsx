import React, { useState } from 'react';
import './postauction.css'; // Importing the post auction CSS

const PostAuction = () => {
  const [auctionTitle, setAuctionTitle] = useState('');
  const [auctionDescription, setAuctionDescription] = useState('');
  const [auctionPrice, setAuctionPrice] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handlePostAuction = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (auctionTitle === '' || auctionDescription === '' || auctionPrice === '') {
      setError('Please fill in all fields.');
      setIsSubmitting(false); // Stop the submission
    } else {
      // Handle post auction logic here (e.g., API call)
      console.log('Auction Posted');
      setIsSubmitting(false); // Reset submission state
      // Reset the form after successful submission
      setAuctionTitle('');
      setAuctionDescription('');
      setAuctionPrice('');
    }
  };

  return (
    <div className="post-auction-container">
      <h2>Post a New Auction</h2>
      <form onSubmit={handlePostAuction}>
        <input
          type="text"
          placeholder="Auction Title"
          value={auctionTitle}
          onChange={(e) => setAuctionTitle(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Auction Description"
          value={auctionDescription}
          onChange={(e) => setAuctionDescription(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Starting Price"
          value={auctionPrice}
          onChange={(e) => setAuctionPrice(e.target.value)}
          className="input-field"
        />
        
        {/* Display Error Message */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Posting...' : 'Post Auction'}
        </button>
      </form>
    </div>
  );
};

export default PostAuction;
