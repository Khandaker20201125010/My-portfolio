import React from 'react';
import { Link } from 'react-router-dom';
import hostel from '../../assets/images/logo.png'
const ProjectBody = () => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                   <img src={hostel} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Hostel Blaze
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A hostel meal website</p>
                    <div className="card-actions justify-end">
                        <Link to='https://hostel-management-660de.web.app/'>
                        <div className="badge badge-outline text-blue-500">hostel-management</div></Link>
                     
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectBody;