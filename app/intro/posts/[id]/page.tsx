import Image from "next/image";

const PostsPage = ({ params: { id } }: { params: { id: string } }) => {
  
  return (
    <div className="w-full h-full bg-purple-600 flex flex-col justify-center items-center">
      <h1>pöst: {id}</h1>
      <div className="h-[300px] w-[400px] border-2 border-red-600 relative">
        <Image
          src={
            "https://www.shutterstock.com/image-vector/french-dogs-style-set-vector-600nw-2122189058.jpg"
          }
          fill
          alt={"les chiens"}
          // height={300}
          // width={500}
        />
      </div>
    </div>
  ); 
};

export default PostsPage;
