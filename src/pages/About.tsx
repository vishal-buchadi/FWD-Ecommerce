const About = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopVibe</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6">
            Welcome to ShopVibe, your destination for premium lifestyle products.
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for quality and style, ShopVibe brings you carefully curated 
              products that enhance your everyday life. We believe that shopping should be an 
              experience that brings joy and satisfaction, which is why we focus on products 
              that combine functionality with beautiful design.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide our customers with exceptional products at fair prices, 
              backed by outstanding customer service. We're committed to sustainability, quality, 
              and creating a shopping experience that exceeds expectations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Carefully selected premium products</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Fast and free shipping on orders over $100</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Secure payment processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Easy returns and exchanges</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
