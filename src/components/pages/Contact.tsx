import { useForm } from "react-hook-form";
import { string, number } from "yup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomMotionDiv from "../../helpers/customMotionDiv";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import { fadeIn } from "../../helpers/variants";

type FormData = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const nameRules = /^[A-Za-z]+$/;
// min 8characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const schema = yup
  .object({
    name: string().required("Required").matches(nameRules, {
      message: "Seuls les caractères alphabétiques sont autorisés.",
    }),
    email: string().required("Required").email("Cet email nest pas valide"),
    phone: number().required("Required"),
    message: string().required("Required"),
  })
  .required();

const Contact = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleContactSubmit = handleSubmit((data: FormData) => {
    // Reset the form after successful submission
    formState.isSubmitted && reset();
  });

  return (
    <div className="mt-pageGap w-full bg-yellowAccent py-[7rem] phone:py-[4rem]">
      <div className="container">
        <CustomMotionDiv
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-titleXL">Contactez nous!</h1>
        </CustomMotionDiv>
        {/* main div */}

        <div className="mt-space2r flex phone:flex-col">
          {/* form div */}
          <CustomMotionDiv
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full grow"
          >
            {/* form here */}
            <form
              className="flex h-full w-4/5 flex-col justify-between screenL:w-full phone:mb-10"
              onSubmit={handleContactSubmit}
            >
              {/* name */}
              <div className="mt-4 flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Nom</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Votre nom"
                  required
                  readOnly={false}
                  className="h-[2rem] w-full rounded-[6px] border border-gray3 bg-transparent pl-2 placeholder:m-6 placeholder:text-medium placeholder:text-black/[.33] focus:placeholder:text-transparent"
                />
              </div>
              <div className="error">
                {formState.errors.name?.message !== undefined
                  ? `${formState.errors.name?.message}`
                  : ""}
              </div>
              {/* email */}
              <div className="mt-4 flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Email</label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Votre email address"
                  className="h-[2rem] w-full rounded-[6px] border border-gray3 bg-transparent  pl-2  placeholder:m-6 placeholder:text-medium placeholder:text-black/[.33] focus:placeholder:text-transparent"
                />
              </div>
              <div className="error">
                {formState.errors.email?.message !== undefined
                  ? `${formState.errors.email?.message}`
                  : ""}
              </div>

              {/* phone */}
              <div className="mt-4 flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Phone</label>
                <input
                  type="number"
                  className="h-[2rem] w-full rounded-[6px] border border-gray3 bg-transparent  pl-2  placeholder:m-6 placeholder:text-medium placeholder:text-black/[.33] focus:placeholder:text-transparent"
                  {...register("phone")}
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="error">
                {formState.errors.phone?.message !== undefined
                  ? `${formState.errors.phone?.message}`
                  : ""}
              </div>

              <div className="mt-4 flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Message</label>
                <input
                  type="text"
                  className="h-[2rem] w-full rounded-[6px] border border-gray3 bg-transparent pl-2 placeholder:m-6 placeholder:text-medium placeholder:text-black/[.33] focus:placeholder:text-transparent"
                  {...register("message")}
                  placeholder="Saisir votre message"
                />
              </div>
              <div className="error">
                {formState.errors.message?.message !== undefined
                  ? `${formState.errors.message?.message}`
                  : ""}
              </div>

              <button className="mt-[40px] rounded-[5px] bg-background py-1">
                <span className="text-medium text-white">Submit</span>
              </button>
            </form>
          </CustomMotionDiv>

          {/* info div */}
          <CustomMotionDiv
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="ml-[74px] w-full grow phone:ml-0"
          >
            <div className="mb-[40px]">
              <span className="text-titleM">Address</span>
              <p className="text-titleS">3 avenue cottakji 75015</p>
            </div>
            <div className="mb-[40px]">
              <span className="text-titleM">Email</span>
              <p className="text-titleS">contact@crocochat.com</p>
            </div>
            <div className="mb-[40px]">
              <span className="text-titleM">Phone</span>
              <p className="text-titleS">01 59 00 28 55</p>
              <p className="text-titleS">06 93 79 07 14</p>
            </div>

            {/* icons */}
            <div className="gap-2 displayFlex-[flex-start] phone:justify-between">
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                {" "}
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="/">
                {" "}
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/">
                {" "}
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </CustomMotionDiv>
        </div>
      </div>
    </div>
  );
};

export default Contact;
