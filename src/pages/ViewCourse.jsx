import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));
      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    })();
  }, [courseId, dispatch, token]);

  return (
    <>
      <div className="relative flex min-h-[calc(100vh)]">
        {/* Sidebar visible on large screens */}
        <div className="hidden md:flex md:w-[320px] md:max-w-[350px] md:border-r md:border-r-richblack-700 md:bg-richblack-800">
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        </div>
        
        {/* Content area */}
        <div className="flex-1 overflow-auto">
          <div className="mx-8">
            <Outlet />
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="absolute top-4 right-4 z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AiOutlineMenu className="text-3xl text-richblack-25" />
        </button>

        {/* Mobile sidebar */}
        <div
          className={`fixed inset-0 z-40 flex md:hidden mt-[60px] h-full w-[320px] max-w-[350px] flex-col border-r border-r-richblack-700 bg-richblack-800 transition-transform duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        </div>
      </div>

      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
}
