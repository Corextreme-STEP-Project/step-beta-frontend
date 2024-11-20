const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 italic mt-2">
      <div className="animate-pulse">.</div>
      <div className="animate-pulse">.</div>
      <div className="animate-pulse">.</div>
      <span>Someone is typing...</span>
    </div>
  );
};

export default TypingIndicator;