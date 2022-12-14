import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingSlot from "./component/BookingSlot/BookingSlot";
import JoinSession from "./component/JoinSession/JoinSession";
import OneToOneIntro from "./component/OneToOneIntro/OneToOneIntro";
import TeacherRating from "./component/TeacherRating/TeacherRating";
import VideoSection from "./component/VideoSection/VideoSection";
import TeacherPanel from "./component/TeacherPanel/TeacherPanel";
import TeacherRequest from "./component/TeacherRequest/TeacherRequest";
import StudentClassList from "./component/TeacherPanel/list/StudentClassList";
import DataProvider from "./DataContext/DataProvider";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OneToOneIntro />} />
          <Route path="/book-slot/*" element={<BookingSlot />} />
          <Route
            path="/teacher-profile/teacher-request"
            element={<TeacherRequest />}
          />
          <Route path="/teacher-panel" element={<TeacherPanel />} />
          <Route path="/teacher-class-history" element={<StudentClassList />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
