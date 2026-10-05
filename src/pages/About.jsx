import axios from "axios";
import { useState, useEffect } from "react";

const About = () => {
  const [jobs, setJob] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(
        "https://countries.dev/countries?fields=name%2Ccapital%2Cflag&full=true&sort=population&limit=10&offset=0",
      );
      setJob(response.data);
    };
    fetchJobs();
  }, []);

  console.log(jobs);
  return <div></div>;
};

export default About;
