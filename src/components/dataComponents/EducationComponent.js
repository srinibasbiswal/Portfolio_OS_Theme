import React from 'react';
import { Card } from 'react-bootstrap';
import timelineStyle from '../../stylesheets/timeline_new.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons";

function EducationComponent(){
    return(
        <Card className={`shadow-lg bg-white rounded m-3`}>
            <Card.Body className={`row`}>
            	<div className={`container`}>
                	<h2 className={`pb-3 pt-2 border-bottom mb-5 text-center`}>Educational Timeline</h2>
                	<div className={`row align-items-center ${timelineStyle.how_it_works} d-flex`}>
                		<div className={`${timelineStyle.col_2} col-2 text-center bottom d-inline-flex justify-content-center align-items-center`}>
                  		<div className={`${timelineStyle.circle} font-weight-bold`}>1</div>
                  		</div>
                  		<div className={`col-6`}>
                    		<h5>ITER, Siksha 'O' Anusandhan (Deemed to be University)</h5>
                    		<div>
								<FontAwesomeIcon icon={faGraduationCap} className={`mr-1`}></FontAwesomeIcon>
								<span>Bachelor's Degree in Computer Science and Engineering - 2019</span>
							</div>
                  		</div>
                	</div>
                	<div className={`row ${timelineStyle.timeline}`}>
                  		<div className={`${timelineStyle.col_2} col-2`}>
                    		<div className={`${timelineStyle.corner} ${timelineStyle.top_right}`}></div>
                  		</div>
                  	<div className={`col-8`}>
                    	<hr/>
                  	</div>
					<div className={`${timelineStyle.col_2} col-2`}>
						<div className={`${timelineStyle.corner} ${timelineStyle.left_bottom}`}></div>
					</div>
                	</div>
					<div className={`row align-items-center justify-content-end ${timelineStyle.how_it_works} d-flex`}>
					<div className={`col-6 text-right`}>
						<h5>O.D.M. Public School, Bhubaneswar</h5>
						<div>
							<FontAwesomeIcon icon={faGraduationCap} className={`mr-1`}></FontAwesomeIcon>
							<span>Intermediate - 2015</span>
						</div>
					</div>
					<div className={`${timelineStyle.col_2} col-2 text-center full d-inline-flex justify-content-center align-items-center`}>
						<div className={`${timelineStyle.circle} font-weight-bold`}>2</div>
					</div>
					</div>
					<div className={`row ${timelineStyle.timeline}`}>
					<div className={`${timelineStyle.col_2} col-2`}>
						<div className={`${timelineStyle.corner} ${timelineStyle.right_bottom}`}></div>
					</div>
					<div className={`col-8`}>
						<hr/>
					</div>
					<div className={`${timelineStyle.col_2} col-2`}>
						<div className={`${timelineStyle.corner} ${timelineStyle.top_left}`}></div>
					</div>
					</div>
					<div className={`row align-items-center ${timelineStyle.how_it_works} d-flex`}>
					<div className={`${timelineStyle.col_2} col-2 text-center top d-inline-flex justify-content-center align-items-center`}>
						<div className={`${timelineStyle.circle} font-weight-bold`}>3</div>
					</div>
					<div className={`col-6`}>
						<h5>Prabhujee English Medium School, Bhubaneswar</h5>
						<div>
							<FontAwesomeIcon icon={faGraduationCap} className={`mr-1`}></FontAwesomeIcon>
							<span>Matriculation - 2013</span>
						</div>
					</div>
					</div>
              	</div>
            </Card.Body>
        </Card>

    );
}

export default EducationComponent;