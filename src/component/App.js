import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './css/App.css';
import PanelGroup from 'react-panelgroup';
import styled from 'styled-components';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';
import Navigation from './Navigation';


const Container = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
`;

const panelConfig = [
    { size: 300, minSize: 0, maxSize: 300, resize: "dynamic" },
    { resize: "dynamic" }
]

const isNewCourse = (courseId, dndData) => {
    for (const drpblId in dndData) {
        if (drpblId === 'search-result') continue;
        if (dndData[drpblId].some(course => course._id === courseId))
            return false;
    }
    return true;
}

const reorderCourses = (courseList, startIndex, endIndex) => {
    const result = Array.from(courseList);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

const moveCourse = (srcCourseList, destCourseList, source, destination) => {
    const srcCourseListClone = Array.from(srcCourseList);
    const destCourseListClone = Array.from(destCourseList);

    const [removed] = srcCourseListClone.splice(source.index, 1);
    destCourseListClone.splice(destination.index, 0, removed);

    const result = {};

    result[source.droppableId] = srcCourseListClone;
    result[destination.droppableId] = destCourseListClone;

    return result;

}

const sortSchoolYears = (schoolYears) => {
    return schoolYears.sort((prev, next) => {
        const prevYear = parseInt(prev.year.split('/')[0])
        const nextYear = parseInt(next.year.split('/')[1])
        if (prevYear < nextYear) return -1;
        if (prevYear > nextYear) return 1;
        else return 0
    })
}

const sortAddYearOptions = (options) => {
    return options.sort((prev, next) => {
        const prevYear = parseInt(prev.value.split('/')[0])
        const nextYear = parseInt(next.value.split('/')[1])
        if (prevYear < nextYear) return -1;
        if (prevYear > nextYear) return 1;
        else return 0
    })
}

const generateSchoolYear = (startYear, endYear) => {
    return Array(endYear - startYear + 1).fill().map((_, idx) => {
        return {
            label: `${startYear + idx}/${startYear + idx + 1}`, value: `${startYear + idx}/${startYear + idx + 1}`
        }
    })
}


class App extends Component {

    state = {
        // data for user degree plan
        planData: [],

        // data representing each droppable column
        dndData: {
            'search-result': [],
        },

        // options for add year drop down selections
        addYearOptions: generateSchoolYear(15, 30),

        // number of resulting courses when searched initially
        'initial-result-num': 0,

        // flag for searched course is already in plan
        isAlreadyPlanned: false,
    }

    onDragEnd = (result) => {
        const { source, destination } = result;
        console.log(source);
        console.log(destination);

        if (!destination) return;
        if (destination.droppableId === "search-result") return;
        // return if destination already contains the course

        if (source.droppableId === destination.droppableId) {
            // moved from the same school term -> reorder
            const reorderedResult = reorderCourses(
                this.state.dndData[source.droppableId],
                source.index,
                destination.index
            )
            console.log(reorderedResult);

            const newState = { ...this.state };

            newState.dndData[source.droppableId] = reorderedResult;
            this.setState(newState);
            this.syncPlanData(source.droppableId, reorderedResult);

        } else {
            // moved to the other school term
            const movedResult = moveCourse(
                this.state.dndData[source.droppableId],
                this.state.dndData[destination.droppableId],
                source,
                destination
            );

            console.log(movedResult);

            const newState = { ...this.state };

            newState.dndData[source.droppableId] = movedResult[source.droppableId];
            newState.dndData[destination.droppableId] = movedResult[destination.droppableId];
            this.setState(newState);
            this.syncPlanData(source.droppableId, movedResult[source.droppableId]);
            this.syncPlanData(destination.droppableId, movedResult[destination.droppableId]);
        }

        console.log(this.state);
    }

    syncPlanData = (drpblId, courses) => {
        const year = drpblId.slice(0, 5);
        const term = drpblId.slice(5);

        let idx = 0;
        for (let i = 0; i < this.state.planData.length; i++) {
            if (this.state.planData[i].year === year) {
                idx = i;
                break;
            }
        }

        const newState = { ...this.state };

        if (term === 'f') newState.planData[idx].terms[0] = courses;
        else if (term === 'w') newState.planData[idx].terms[1] = courses;
        else if (term === 'sp') newState.planData[idx].terms[2] = courses;
        else if (term === 'su') newState.planData[idx].terms[3] = courses;

        this.setState(newState);
    }

    // gets called when search button is called
    updateSearchResult = (courses) => {

        const newState = {
            ...this.state
        };

        newState.isAlreadyPlanned = false;
        const newCourses = courses.filter(course => {
            if (isNewCourse(course._id, this.state.dndData))
                return true;
            else {
                newState.isAlreadyPlanned = true;
                return false;
            }
        })

        newState.dndData['search-result'] = newCourses;
        newState['initial-result-num'] = newCourses.length;

        this.setState(newState);

        console.log(this.state);
    }


    addSchoolYear = (year, fCourses, wCourses, spCourses, suCourses) => {
        // fCourses: array containing courses for fall quarter
        let newState = {
            ...this.state
        };

        newState.planData.push({
            year: year,
            terms: [
                fCourses ? fCourses : [],
                wCourses ? wCourses : [],
                spCourses ? spCourses : [],
                suCourses ? suCourses : [],
            ]
        });

        // creating the droppable columns
        newState.dndData[year + 'f'] = fCourses ? fCourses : [];
        newState.dndData[year + 'w'] = wCourses ? wCourses : [];
        newState.dndData[year + 'sp'] = spCourses ? spCourses : [];
        newState.dndData[year + 'su'] = suCourses ? suCourses : [];


        sortSchoolYears(newState.planData);
        newState.addYearOptions = newState.addYearOptions.filter(option => option.value !== year);

        this.setState(newState);
    }

    removeSchoolYear = (year) => {
        const newState = {
            ...this.state
        };

        newState.planData = newState.planData.filter(plan => plan.year !== year);

        newState.addYearOptions.push({
            label: year, value: year
        });

        sortAddYearOptions(newState.addYearOptions);

        // delete corresponding dnd column data
        delete newState.dndData[year + 'f'];
        delete newState.dndData[year + 'w'];
        delete newState.dndData[year + 'sp'];
        delete newState.dndData[year + 'su'];

        this.setState(newState);
    }

    removeCourse = (drpblId, courseId) => {
        const newState = {
            ...this.state
        };

        const removedList = newState.dndData[drpblId].filter((course) => course._id !== courseId)
        newState.dndData[drpblId] = removedList;


        this.setState(newState);
        this.syncPlanData(drpblId, removedList);
    }

    savePlan = () => {

    }


    loadPlan = (planData) => {
        
        const newState = {
            planData: [],
            dndData: {
                'search-result': [],
            },
            addYearOptions: generateSchoolYear(15, 30),
            'initial-result-num': 0,
            isAlreadyPlanned: false,
        }

        planData.forEach((plan) => {
            newState.dndData[`${plan.year}f`] = plan.terms[0]
            newState.dndData[`${plan.year}w`] = plan.terms[1]
            newState.dndData[`${plan.year}sp`] = plan.terms[2]
            newState.dndData[`${plan.year}su`] = plan.terms[3]
            newState.addYearOptions =
                newState.addYearOptions.filter(option => option.value !== plan.year);
        })

        this.setState(newState);
    }

    render() {
        return (

            <Container>
                <div className="header">
                    <Navigation />
                </div>
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <div className="main">
                        <PanelGroup panelWidths={panelConfig} borderColor="#EEEEEE" spacing={5}>
                            <SidePanel
                                appData={this.state}
                                updateSearchResult={this.updateSearchResult}
                            />
                            <MainPanel
                                appData={this.state}
                                addSchoolYear={this.addSchoolYear}
                                removeSchoolYear={this.removeSchoolYear}
                                removeCourse={this.removeCourse}
                            />
                        </PanelGroup>
                    </div>
                </DragDropContext>
            </Container>

        );
    }
}

export default App;