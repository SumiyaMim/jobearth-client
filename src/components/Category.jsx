/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../providers/AuthProvider';
import Lottie from 'lottie-react';
import spinner from '../assets/spinner.json'
import { Link } from 'react-router-dom';

const Category = () => {

  const { loading } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredJob, setFilteredJob] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0); 

  // get category from the server
  useEffect(() => {
    axios.get('https://jobearth-server.vercel.app/category').then((res) => {
      setCategories(res.data);
    });
  }, []);

  // get jobs from the server
  useEffect(() => {
    axios.get('https://jobearth-server.vercel.app/jobs').then((res) => {
      setJobs(res.data);
    });
  }, []);

  // set the initial filteredJob for the first category
  useEffect(() => {
    if (categories.length > 0) {
      const initialCategory = categories[0].category_name;
      const initialFilteredJobs = jobs.filter((job) => job.category === initialCategory);
      setFilteredJob(initialFilteredJobs);
    }
  }, [categories, jobs]);

  const handleCategory = (selectedCategory, index) => {
    setSelectedCategoryIndex(index);
    const filteredJobs = jobs.filter((job) => job.category === selectedCategory);
    setFilteredJob(filteredJobs);
  };

  if (loading) {
    return (
        <div className='flex justify-center py-28'>
            <div className=' w-[100px] mx-auto'>
                <Lottie animationData={spinner} loop={true} />
            </div>
        </div>
    )
  }

  return (
    <div className="py-10 px-8 lg:px-14 bg-white">
      <h1 className="font-semibold text-2xl text-center mb-2">Our Category</h1>
      <p className="text-center font-normal text-zinc-500 leading-6 text-xs md:text-sm md:w-4/5 lg:w-1/2 mx-auto mb-4">
        JobEarth covers job search, career development, and workplace advice, providing valuable resources for those seeking employment opportunities and professional growth insights.
      </p>
      <hr className="border-[1.5px] border-cyan-600 w-40 mx-auto mb-16" />

      <Tabs defaultIndex={selectedCategoryIndex}>
        <TabList className="flex space-x-4 bg-cyan-600 text-white rounded-t-md p-1">
          {categories.map((category, index) => (
            <Tab key={category._id} onClick={() => handleCategory(category.category_name, index)} className="z-1 outline-none">
              <h2 className="py-2 px-3 md:py-3 md:px-5 rounded-none font-medium text-xs md:text-base">{category.category_name}</h2>
            </Tab>
          ))}
        </TabList>
        {categories.map((category) => (
          <TabPanel key={category._id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {filteredJob.map((job) => (
                <div key={job._id} className="pt-10">
                  <div className="p-10 shadow rounded-lg">
                    <h2 className="font-semibold text-xl lg:text-2xl mb-1">{job.jobTitle}</h2>
                    <p className="text-zinc-500 font-normal text-justify mb-2">{job.description}</p>
                    <p className="text-zinc-800 font-medium">
                      Deadline:{' '} &nbsp;
                      {new Date(job.deadline)
                        .toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })
                        .replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3')}
                    </p>
                    <p className="text-zinc-800 font-medium mb-6">Price Range: &nbsp;${job.minimumPrice} - ${job.maximumPrice}</p>
                    <Link to={`/job-details/${job._id}`}>
                        <button className="px-5 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md text-sm">BID NOW</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
