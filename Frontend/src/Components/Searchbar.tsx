import React, { useState } from 'react';
interface SearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center justify-center text-sm">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="🔍 Search..."
        className="w-full p-2 border mt-3 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        
      />
    </div>
  );
};

export default Searchbar;
