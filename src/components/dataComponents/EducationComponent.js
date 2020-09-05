import React from 'react';
import { Card } from 'react-bootstrap';
import TimeLineStyle from '../../stylesheets/EducationTimeline.module.css';
import bgstyles from '../../stylesheets/BGStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {EducationList} from './dataSet';

function EducationComponent(){
    return(
        <Card className={`bg-white rounded m-5 ${bgstyles.ColorShadow_LG}`}>
            <Card.Body className={`row ${bgstyles.ripple_background} rounded`}>
				<div className={`${bgstyles.area}`} >
                    <ul className={`${bgstyles.circles}`}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div > 
            	<div className={`container`}>
                	<h2 className={`pb-3 pt-2 border-bottom mb-5 text-center`}>Educational Timeline</h2>

					{
                        EducationList.map((education, index) => {
							if(index == 0){
								return(
									<div className={`row align-items-center ${TimeLineStyle.timeLine} d-flex`}>
										<div className={`${TimeLineStyle.col_2} col-2 text-center bottom d-inline-flex justify-content-center align-items-center`}>
											<div className={`${TimeLineStyle.circle} font-weight-bold`}>{education.id}</div>
										</div>
										<div className={`col-10`}>
											<h5>{education.instituteName}</h5>
											<div>
												<FontAwesomeIcon icon={faGraduationCap} className={`mr-1`}></FontAwesomeIcon>
												<span>
													{education.degree} 
													{education.year ? '-'+education.year : null}
												</span>
											</div>
										</div>
									</div>
								)
							}else if (index % 2 == 0){
								return(
									<React.Fragment>
										{/* Timeline Style */}
										<div className={`row ${TimeLineStyle.timeline}`}>
											<div className={`${TimeLineStyle.col_2} col-2`}>
												<div className={`${TimeLineStyle.corner} ${TimeLineStyle.right_bottom}`}></div>
											</div>
											<div className={`col-8`}>
												<hr/>
											</div>
											<div className={`${TimeLineStyle.col_2} col-2`}>
												<div className={`${TimeLineStyle.corner} ${TimeLineStyle.top_left}`}></div>
											</div>
										</div>

										<div className={`row align-items-center ${TimeLineStyle.timeLine} d-flex`}>
											<div className={`${TimeLineStyle.col_2} col-2 text-center top d-inline-flex justify-content-center align-items-center`}>
												<div className={`${TimeLineStyle.circle} font-weight-bold`}>{education.id}</div>
											</div>
											<div className={`col-10`}>
												<h5>{education.instituteName}</h5>
												<div>
													<FontAwesomeIcon icon={faGraduationCap} className={`mr-1`}></FontAwesomeIcon>
													<span>
														{education.degree} 
														{education.year ? '-'+education.year : null}
													</span>
												</div>
											</div>
										</div>
									</React.Fragment>
								)
							}else if (index % 2 != 0){
								return(
									<React.Fragment>
										{/* Timeline Style */}
										<div className={`row ${TimeLineStyle.timeline}`}>
											<div className={`${TimeLineStyle.col_2} col-2`}>
												<div className={`${TimeLineStyle.corner} ${TimeLineStyle.top_right}`}></div>
											</div>
											<div className={`col-8`}>
												<hr/>
											</div>
											<div className={`${TimeLineStyle.col_2} col-2`}>
												<div className={`${TimeLineStyle.corner} ${TimeLineStyle.left_bottom}`}></div>
											</div>
										</div>

										<div className={`row align-items-center justify-content-end ${TimeLineStyle.timeLine} d-flex`}>
											<div className={`col-10 text-right`}>
												<h5>{education.instituteName}</h5>
												<div>
													<FontAwesomeIcon icon={faGraduationCap} className={`mr-1`}></FontAwesomeIcon>
													<span>
														{education.degree} 
														{education.year ? '-'+education.year : null}
													</span>
												</div>
											</div>
											<div className={`${TimeLineStyle.col_2} col-2 text-center full d-inline-flex justify-content-center align-items-center`}>
												<div className={`${TimeLineStyle.circle} font-weight-bold`}>{education.id}</div>
											</div>
										</div>
								</React.Fragment>
								)
							}
						})
					}
              	</div>
            </Card.Body>
        </Card>
    );
}

export default EducationComponent;