const Shimmer = () => {
  // Function to render the repeated code block
  const renderRepeatedBlocks = () => {
    const repeatedBlocks = [];

    // Loop 10 times to repeat the code block
    for (let i = 0; i < 10; i++) {
      repeatedBlocks.push(
        <div
          key={i} // Add a unique key to each repeated block
          className="flex flex-wrap m-4 p-4 w-[250px] h-[300px] bg-slate-50 rounded-lg hover:bg-blue-50"
        >
          <img
            component="img"
            height="140"
            src="https://placehold.co/600x400?text=empty"
            alt=""
          />
          {/* Add a source for the image */}
          <h1 className="font-bold py-2">Title</h1> {/* Add a title */}
          <h3>Subtitle</h3> {/* Add a subtitle */}
          <p variant="body2" color="text.secondary">
            Some text here
          </p>
          {/* Add content */}
        </div>
      );
    }

    return repeatedBlocks;
  };

  return (
    <div className="flex flex-wrap">
      {renderRepeatedBlocks()} {/* Render the repeated blocks */}
    </div>
  );
};

export default Shimmer;
