const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-300 h-full">
      <div className="p-2">
      this is a navbar
      </div>
      <hr />
      {children}
    </div>
  );
};

export default TestLayout;
