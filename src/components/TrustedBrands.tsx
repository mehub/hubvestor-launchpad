const TrustedBrands = () => {
  const brands = [
    { name: "Chase Bank", color: "from-blue-600 to-blue-400" },
    { name: "Wells Fargo", color: "from-red-600 to-red-400" },
    { name: "AIG Insurance", color: "from-green-600 to-green-400" },
    { name: "State Farm", color: "from-red-700 to-red-500" },
    { name: "Goldman Sachs", color: "from-blue-700 to-blue-500" },
    { name: "Morgan Stanley", color: "from-purple-600 to-purple-400" },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Trusted by Leading Partners
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-6 rounded-lg bg-card hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${brand.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-xs font-medium text-muted-foreground">{brand.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
