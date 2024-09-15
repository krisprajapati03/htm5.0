import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        summary: '',
        education: [{ school: '', degree: '', year: '' }],
        experience: [{ company: '', position: '', years: '', description: '' }],
        skills: []
    });

    // Handle changes for individual form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Add new education entry
    const handleAddEducation = () => {
        setFormData({
            ...formData,
            education: [...formData.education, { school: '', degree: '', year: '' }]
        });
    };

    // Add new experience entry
    const handleAddExperience = () => {
        setFormData({
            ...formData,
            experience: [...formData.experience, { company: '', position: '', years: '', description: '' }]
        });
    };

    // Handle skills change by splitting into an array
    const handleSkillChange = (e) => {
        const skillList = e.target.value.split(',').map(skill => skill.trim());
        setFormData({ ...formData, skills: skillList });
    };

    // Reference for generating PDF
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center py-10">
            <div className="container justify-center items-center mx-auto flex flex-wrap space-x-8">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4">Resume Builder</h2>
                    <form>
                        {/* Basic Info */}
                        <div className="mb-4">
                            <label className="block text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 mt-1 bg-gray-900 rounded border border-gray-700"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 mt-1 bg-gray-900 rounded border border-gray-700"
                                placeholder="johndoe@email.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-2 mt-1 bg-gray-900 rounded border border-gray-700"
                                placeholder="+1 234 567 890"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Summary</label>
                            <textarea
                                name="summary"
                                value={formData.summary}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full p-2 mt-1 bg-gray-900 rounded border border-gray-700"
                                placeholder="Brief summary about yourself"
                            />
                        </div>

                        {/* Education Section */}
                        <div className="mb-4">
                            <label className="block text-gray-300">Education</label>
                            {formData.education.map((edu, index) => (
                                <div key={index} className="flex space-x-2 mb-2">
                                    <input
                                        type="text"
                                        value={edu.school}
                                        onChange={(e) => {
                                            const updatedEducation = [...formData.education];
                                            updatedEducation[index].school = e.target.value;
                                            setFormData({ ...formData, education: updatedEducation });
                                        }}
                                        className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                        placeholder="School Name"
                                    />
                                    <input
                                        type="text"
                                        value={edu.degree}
                                        onChange={(e) => {
                                            const updatedEducation = [...formData.education];
                                            updatedEducation[index].degree = e.target.value;
                                            setFormData({ ...formData, education: updatedEducation });
                                        }}
                                        className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                        placeholder="Degree"
                                    />
                                    <input
                                        type="text"
                                        value={edu.year}
                                        onChange={(e) => {
                                            const updatedEducation = [...formData.education];
                                            updatedEducation[index].year = e.target.value;
                                            setFormData({ ...formData, education: updatedEducation });
                                        }}
                                        className="w-1/3 p-2 bg-gray-900 rounded border border-gray-700"
                                        placeholder="Year"
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddEducation}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                            >
                                Add Education
                            </button>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-4">
                            <label className="block text-gray-300">Experience</label>
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex space-x-2 mb-2">
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => {
                                                const updatedExperience = [...formData.experience];
                                                updatedExperience[index].company = e.target.value;
                                                setFormData({ ...formData, experience: updatedExperience });
                                            }}
                                            className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                            placeholder="Company Name"
                                        />
                                        <input
                                            type="text"
                                            value={exp.position}
                                            onChange={(e) => {
                                                const updatedExperience = [...formData.experience];
                                                updatedExperience[index].position = e.target.value;
                                                setFormData({ ...formData, experience: updatedExperience });
                                            }}
                                            className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                            placeholder="Position"
                                        />
                                        <input
                                            type="text"
                                            value={exp.years}
                                            onChange={(e) => {
                                                const updatedExperience = [...formData.experience];
                                                updatedExperience[index].years = e.target.value;
                                                setFormData({ ...formData, experience: updatedExperience });
                                            }}
                                            className="w-1/3 p-2 bg-gray-900 rounded border border-gray-700"
                                            placeholder="Years"
                                        />
                                    </div>
                                    <textarea
                                        value={exp.description}
                                        onChange={(e) => {
                                            const updatedExperience = [...formData.experience];
                                            updatedExperience[index].description = e.target.value;
                                            setFormData({ ...formData, experience: updatedExperience });
                                        }}
                                        rows="3"
                                        className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                        placeholder="Brief description of your role and responsibilities"
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddExperience}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                            >
                                Add Experience
                            </button>
                        </div>

                        {/* Skills Section */}
                        <div className="mb-4">
                            <label className="block text-gray-300">Skills</label>
                            <input
                                type="text"
                                value={formData.skills.join(', ')}
                                onChange={handleSkillChange}
                                className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                placeholder="e.g., JavaScript, React, Node.js"
                            />
                        </div>
                    </form>

                    <div className="mt-6">
                        <button
                            onClick={handlePrint}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
                        >
                            Generate PDF
                        </button>
                    </div>
                </div>

                {/* Resume Preview Section */}
                {/* <div className="w-full lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg">
                    <div ref={componentRef} className="p-6 bg-white">
                        <h2 className="text-xl font-bold">{formData.name}</h2>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                        <p className="mt-4">{formData.summary}</p>

                        <h3 className="text-lg font-semibold mt-6">Education</h3>
                        {formData.education.map((edu, index) => (
                            <div key={index} className="mt-2">
                                <p className="font-semibold">{edu.degree} - {edu.school}</p>
                                <p>{edu.year}</p>
                            </div>
                        ))}

                        <h3 className="text-lg font-semibold mt-6">Experience</h3>
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="mt-2">
                                <p className="font-semibold">{exp.position} - {exp.company}</p>
                                <p>{exp.years}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}

                        <h3 className="text-lg font-semibold mt-6">Skills</h3>
                        <ul className="list-disc ml-6">
                            {formData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ResumeBuilder;
