import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetCourseApi() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error("Ошибка при получении курсов: ", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Курсы</h1>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>{course.name}: {course.rate}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetCourseApi;