// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { string, number } from 'yup';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import linkedin from '../../assets/linkedin.png';

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
    name: string().required('Required').matches(nameRules, {
      message: 'Seuls les caractères alphabétiques sont autorisés.',
    }),
    email: string().required('Required').email('Cet email nest pas valide'),
    phone: number().required('Required'),
    message: string().required('Required'),
  })
  .required();

const Contact = () => {
  // const [formValue, setFormValue] = useState<FormData | null>(null);
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleContactSubmit = handleSubmit((data: FormData) => {
    console.log(data);
    // Reset the form after successful submission
    formState.isSubmitted && reset();
  });

  // const onSubmit = (data: FormData) => {
  //   console.log(formValue);
  //   setFormValue(data);
  // };

  // const onSubmit = (data) => {
  //   dispatch(loginUser(data));
  // };

  return (
    <div className="bg-yellowAccent w-full mt-pageGap py-[7rem]">
      <div className="container ">
        <h1 className="text-titleXL">Contactez nous!</h1>
        {/* main div */}
        <div className="flex mt-space2r">
          {/* form div */}
          <div className=" grow">
            {/* form here */}
            <form
              className="w-4/5 h-full flex-col flex justify-between"
              onSubmit={handleContactSubmit}
              // onSubmit={handleSubmit(onSubmit)}
            >
              {/* name */}
              <div className="flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Nom</label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Votre nom"
                  required
                  readOnly={false}
                  className="w-full h-[2rem] pl-2 rounded-[6px] border border-gray3 bg-transparent placeholder:text-medium placeholder:text-black/[.33] placeholder:m-6 focus:placeholder:text-transparent"
                />
              </div>
              <div className="error">
                {formState.errors.name?.message !== undefined
                  ? `${formState.errors.name?.message}`
                  : ''}
              </div>
              {/* email */}
              <div className="flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Email</label>
                <input
                  type="text"
                  {...register('email')}
                  placeholder="Votre email address"
                  className="w-full h-[2rem] pl-2 rounded-[6px] border border-gray3  bg-transparent  placeholder:text-medium placeholder:text-black/[.33] placeholder:m-6 focus:placeholder:text-transparent"
                />
              </div>
              <div className="error">
                {formState.errors.email?.message !== undefined
                  ? `${formState.errors.email?.message}`
                  : ''}
              </div>

              {/* phone */}
              <div className="flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Phone</label>
                <input
                  type="number"
                  className="w-full h-[2rem] pl-2 rounded-[6px] border border-gray3  bg-transparent  placeholder:text-medium placeholder:text-black/[.33] placeholder:m-6 focus:placeholder:text-transparent"
                  {...register('phone')}
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="error">
                {formState.errors.phone?.message !== undefined
                  ? `${formState.errors.phone?.message}`
                  : ''}
              </div>

              <div className="flexColumn-[flex-start]">
                <label className="mb-1 text-medium">Message</label>
                <input
                  type="text"
                  className="w-full h-[2rem] pl-2 rounded-[6px] border border-gray3 bg-transparent placeholder:text-medium placeholder:text-black/[.33] placeholder:m-6 focus:placeholder:text-transparent"
                  {...register('message')}
                  placeholder="Saisir votre message"
                />
              </div>
              <div className="error">
                {formState.errors.message?.message !== undefined
                  ? `${formState.errors.message?.message}`
                  : ''}
              </div>

              <button className="mt-[40px] bg-background rounded-[5px] py-1">
                <span className="text-white text-medium">Submit</span>
              </button>
            </form>
          </div>

          {/* info div */}
          <div className="grow ml-[74px]">
            <div className="mb-[40px]">
              <span className="text-titleM">Address</span>
              <p className="text-titleS">86 rue Dutot, 75015 Paris</p>
            </div>
            <div className="mb-[40px]">
              <span className="text-titleM">Email</span>
              <p className="text-titleS">contact@sikomobility.com</p>
            </div>
            <div className="mb-[40px]">
              <span className="text-titleM">Phone</span>
              <p className="text-titleS">01 89 71 34 21</p>
              <p className="text-titleS">06 31 79 91 84</p>
            </div>

            {/* icons */}
            <div className="displayFlex-[flex-start] gap-2">
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                {' '}
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="/">
                {' '}
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/">
                {' '}
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
