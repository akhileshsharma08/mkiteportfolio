import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  onSnapshot,
  doc,
  docRef,
  getDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db, storage } from "../Firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  onStateChanged,
  getDownloadURL,
} from "firebase/storage";

const Admin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [tagline, setTagline] = useState("");
  const [objective, setObjective] = useState("");
  const [strength, setStrength] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [profile, setProfile] = useState("");
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);

  const userData = {
    firstName,
    lastName,
    email,
    phone,
    designation,
    linkedin,
    github,
    tagline,
    objective,
    strength,
    experience,
    projects,
    profile,
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // await setDoc(doc(db, "buyplan",user.uid),{buyplandata});
    const docRef = await addDoc(collection(db, "empData"), {
      userData,
    });
    // console.log("Document written with ID: ", docRef.id);/

    // toast.success("InhtmlFormton Updated ✔")

    // setTimeout(() => {
    //     router.push('/payment')
    // }, 3000)
    // console.log(userData, "data uploaded ");

    let myfiles = e.target.files;
    const imagePromises = [];

    for (let file in myfiles) {
      const storageRef = ref(storage, `/images/${file.name}`);
      const response = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(response.ref);

      imagePromises.push(url);
    }

    setImages(imagePromises);
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              admin
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="firstname"
                    placeholder="Akhilesh"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                    placeholder="Akhilesh "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="lastname"
                    placeholder="Sharma "
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full  bg-gray-100  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full   bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="8865029818"
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    placeholder="software engineer"
                    onChange={(e) => setDesignation(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    tagline
                  </label>
                  <input
                    type="email"
                    id="tagline"
                    name="tagline"
                    placeholder="Professional developer with an eye htmlFor detail"
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    objective
                  </label>
                  <input
                    type="email"
                    id="objective"
                    name="objective"
                    placeholder="I Enjoying Solving Problems With Clean Scalable Solutions.I Have Genuine Passion Of Aspiring Dvelopment."
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    strength
                  </label>
                  <input
                    type="email"
                    id="objective"
                    name="objective"
                    placeholder="problem Solver"
                    onChange={(e) => setStrength(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    linkedin
                  </label>
                  <input
                    type="email"
                    id="linkedin"
                    name="linkedin"
                    placeholder="akhilesh@linkedin"
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    github
                  </label>
                  <input
                    type="email"
                    id="github"
                    name="github"
                    placeholder="akhilesh@github"
                    onChange={(e) => setGithub(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    experience
                  </label>
                  <input
                    type="email"
                    id="experience"
                    placeholder="in years"
                    name="experience"
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    projects
                  </label>
                  <input
                    type="email"
                    id="projects"
                    placeholder="example - 6"
                    name="projects"
                    onChange={(e) => setProjects(e.target.value)}
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    htmlFor="profile"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Profile
                  </label>
                  <input
                    type="file"
                    multiple
                    id="profile"
                    name="profile"
                    className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="profile" className="leading-7 text-sm text-gray-600">Skill Category</label>
            <input type="text" id="profile"  name="profile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div> */}

              {/*  */}

              <div className="p-2 w-full">
                <button
                  onClick={HandleSubmit}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
