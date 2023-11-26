const IconHolderPrimary = ({ children }) => {
  return (
    <div>
      <div className="bg-color-primary flex justify-center items-center p-3">
        <div className="text-color-white text-3xl">{children}</div>
      </div>
    </div>
  );
};

const IconHolderPrimaryLight = ({ children }) => {
  return (
    <div>
      <div className="bg-color-primary-light flex justify-center items-center p-3">
        <div className="text-color-primary text-3xl">{children}</div>
      </div>
    </div>
  );
};

export { IconHolderPrimary, IconHolderPrimaryLight };
