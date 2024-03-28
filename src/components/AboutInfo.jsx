import aboutImg from '../../public/aboutImg.jpg'
const AboutInfo = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 font-work sans bg-base-200 mb-8 md:mb-12 rounded-2xl">
	<div className="flex flex-col max-w-[800px] mx-auto overflow-hidden rounded">
		<img src={aboutImg} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-[22px] font-semibold sm:text-3xl">Step into the Universe of BookWorm</a>
				<p className="text-xs dark:text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> Sadiqur Rahman</a>
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>We are dedicated to connecting readers with their favorite books. With an extensive collection across genres, from classics to bestsellers, we aim to be your go-to destination for literary exploration. Join us in celebrating the magic of storytelling and embark on an unforgettable reading experience.</p>
			</div>
		</div>
	</div>
</div>
  );
};

export default AboutInfo;