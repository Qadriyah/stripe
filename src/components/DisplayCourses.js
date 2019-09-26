import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayCourses extends Component {
    render() {
        const { courses: scores } = this.props.courses;
        let total = 0;
        const scoresList = scores.map((score, key) => {
            total += Number(score.mark);
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{score.course}</td>
                    <td>{score.mark}</td>
                </tr>
            );
        });
        const averageScores = total / scores.length;

        return (
            <>
                {scoresList.length > 0 ? (
                    <div className="grade-form">
                        <h4 className="mb-5">Scores</h4>
                        <table className="table table-bordered table-striped table-condensed mb-1 mt-1">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Course Name</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scoresList}
                                <tr>
                                    <td colSpan="2">Total Scores</td>
                                    <td>{total}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Average Scores</td>
                                    <td>{Math.ceil(averageScores)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ): null}
            </>
        )
            }
        }
        
const mapStateToProps = state => ({
    courses: state.courses
});

export default connect(mapStateToProps, {})(DisplayCourses);
