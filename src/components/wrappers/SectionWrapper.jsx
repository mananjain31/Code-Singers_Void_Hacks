import { Button } from "@mui/material";
import { respPX } from "constants/styles";
import React from "react";
import { Link } from "react-router-dom";

const SectionWrapper = ({
  heading,
  paragraphs,
  actionButton,
  image,
  inverted = false,
  className,
}) => {
  console.log(inverted);
  return (
    <section
      className={`${respPX} py-6 flex ${
        inverted ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col justify-between gap-3 ${className} items-center`}
    >
      <div className="md:w-2/3 w-full flex flex-col gap-3">
        <h1 className="text-5xl mb-5">{heading}</h1>
        {paragraphs.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        {actionButton && (
          <span className="w-full md:max-w-fit mt-4">
            <Link to="/login-register">
              <Button variant="contained" fullWidth>
                {actionButton.text}
              </Button>
            </Link>
          </span>
        )}
      </div>
      <img
        className="md:max-w-[400px] object-cover aspect-square max-w-full"
        src={image ? image : "https://source.unsplash.com/random/"}
        alt=""
      />
    </section>
  );
};

export default SectionWrapper;