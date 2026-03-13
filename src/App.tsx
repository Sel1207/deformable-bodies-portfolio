import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import DiagnosticExam from './sections/DiagnosticExam';
import SEUSection from './sections/SEUSection';
import AssessmentVault from './sections/AssessmentVault';
import CourseraSection from './sections/CourseraSection';
import AboutStudent from './sections/AboutStudent';
import EndTermReflection from './sections/EndTermReflection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Diagnostic Exam */}
        <DiagnosticExam />
        
        {/* SEU Section */}
        <SEUSection />
        
        {/* Assessment Vault */}
        <AssessmentVault />
        
        {/* Coursera Section */}
        <CourseraSection />
        
        {/* About the Student */}
        <AboutStudent />
        
        {/* End-Term Reflection */}
        <EndTermReflection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
