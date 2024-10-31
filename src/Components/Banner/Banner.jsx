import Bannerimage from '../../../public/images/books.jpg'


const Banner = () => {

  return (
    <div className="mt-10 mb-10">

      <div className="hero bg-base-200 p-4">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={Bannerimage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
