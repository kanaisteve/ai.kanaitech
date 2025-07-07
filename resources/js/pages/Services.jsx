export default function Services() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">AI Solutions</h2>
          <p>Custom AI solutions for your business needs</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p>Modern web applications built with cutting-edge technology</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Digital Transformation</h2>
          <p>Transform your business with digital solutions</p>
        </div>
      </div>
    </div>
  );
}
