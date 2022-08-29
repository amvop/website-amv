import { Avatar, Badge } from "@chakra-ui/react";

const CardTestimonial = ({ testimonial }) => {
  return (
    <blockquote className="flex flex-col justify-between h-full p-12 bg-white">
      <div>
        <Avatar size="xl" name={testimonial.name} src={testimonial.image} />
        <div className="mt-4">
          <p className="text-2xl font-bold text-secondary-500 sm:text-3xl">
            {testimonial.title}
          </p>
          <p className="mt-4 font-body leading-relaxed text-gray-500">
            {testimonial.description}
          </p>
        </div>
      </div>
      <footer className="mt-8 text-sm text-secondary-500">
        <Badge mr="2" colorScheme="green">
          {testimonial.tag}
        </Badge>
        &mdash; {testimonial.name}
      </footer>
    </blockquote>
  );
};

export default CardTestimonial;
