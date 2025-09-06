'use client';

import { JSX, useState } from 'react';
import Head from 'next/head';
import { FiUpload, FiClock, FiShield } from 'react-icons/fi';
import { FaFilePdf, FaFileWord, FaFileImage, FaRobot, FaRegLightbulb, FaLock } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Feature list with more detailed descriptions and actions
type Feature = { 
  icon: JSX.Element; 
  title: string; 
  description: string; 
  actionText: string; 
  supportedFormats: string[]; 
  ai?: boolean; 
  color: string; 
};

const features: Feature[] = [
  { 
    icon: <FaFilePdf className="w-6 h-6" />, 
    title: 'PDF Converter', 
    description: 'Transform any document into a professional PDF format', 
    actionText: 'Convert to PDF',
    supportedFormats: ['DOCX', 'DOC', 'TXT', 'RTF', 'HTML'],
    ai: false,
    color: 'from-red-500 to-red-400'
  }, 
  { 
    icon: <FaFileImage className="w-6 h-6" />, 
    title: 'Image to PDF', 
    description: 'Convert multiple images into a single PDF document', 
    actionText: 'Convert Images',
    supportedFormats: ['JPG', 'PNG', 'BMP', 'GIF', 'TIFF'],
    ai: false,
    color: 'from-green-500 to-green-400'
  },
  { 
    icon: <FaFileWord className="w-6 h-6" />, 
    title: 'Document Converter', 
    description: 'Convert between various document formats with ease', 
    actionText: 'Convert Files',
    supportedFormats: ['PDF', 'DOCX', 'ODT', 'TXT', 'RTF'],
    ai: false,
    color: 'from-blue-500 to-blue-400'
  },
  { 
    icon: <FaRobot className="w-6 h-6" />, 
    title: 'AI Text Recognition', 
    description: 'Extract text from images and scanned documents', 
    actionText: 'Extract Text',
    supportedFormats: ['JPG', 'PNG', 'PDF'],
    ai: true,
    color: 'from-purple-500 to-purple-400'
  },
  { 
    icon: <FaRegLightbulb className="w-6 h-6" />, 
    title: 'AI Document Summary', 
    description: 'Get concise summaries of long documents instantly', 
    actionText: 'Summarize Now',
    supportedFormats: ['PDF', 'DOCX', 'TXT'],
    ai: true,
    color: 'from-yellow-500 to-yellow-400'
  },
];

export default function Home() {
  const router = useRouter();
  
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>WindSurf - Smart Document Tools for Everyone</title>
        <meta name="description" content="The most intuitive platform for PDF conversion, document processing, and AI-powered document tools. Free, fast, and secure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">WindSurf</span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">BETA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-block text-gray-700 hover:text-blue-600 font-medium">Sign In</button>
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex items-center"
              onClick={() => handleNavigation('/request-convert?feature=PDF+Converter')}
            >
              <FiUpload className="mr-2" /> Start Converting
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0idXJsKCNncmFkaWVudCkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Trusted by over 1 million users worldwide
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              The Smartest Way to Work With <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Documents</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Convert, edit, and manage your files with our powerful, AI-enhanced tools. Lightning fast, completely free, and 100% secure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => handleNavigation('/request-convert?feature=PDF+Converter')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex items-center justify-center"
              >
                <FiUpload className="mr-2" /> Start Converting - It's Free
              </button>
              <a 
                href="#features" 
                className="px-8 py-4 bg-white text-gray-700 rounded-xl text-lg font-medium hover:bg-gray-50 border border-gray-200 transition-colors flex items-center justify-center"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <FiClock className="text-green-500 mr-1.5" />
                <span>Instant conversion</span>
              </div>
              <div className="flex items-center">
                <FiShield className="text-green-500 mr-1.5" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center">
                <svg className="text-green-500 w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No registration needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything You Need to Work Smarter
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful tools designed to make your document workflow effortless and efficient.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-6">
                  <div className={`flex items-center justify-center h-16 w-16 rounded-2xl bg-opacity-10 ${feature.color.replace('from-', 'bg-').replace(' to-', '/')} mb-4`}>
                    {feature.icon}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    {feature.ai && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        AI-Powered
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                  
                  <div className="mt-4">
                    <button 
                      onClick={() => {
                        handleNavigation(`/request-convert?feature=${encodeURIComponent(feature.title)}`);
                        // Here you would typically set the active conversion type
                      }}
                      className={`w-full mt-4 px-4 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r ${feature.color} hover:opacity-90 transition-opacity`}
                    >
                      {feature.actionText}
                    </button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Supports:</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {feature.supportedFormats.map((format, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div id="how-it-works" className="mt-24">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Transform your documents in just three simple steps
            </p>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '1',
                  title: 'Upload Your File',
                  description: 'Drag and drop your file or click to browse. We support all major document formats.'
                },
                {
                  number: '2',
                  title: 'Choose Format',
                  description: 'Select your desired output format from our wide range of supported formats.'
                },
                {
                  number: '3',
                  title: 'Download & Share',
                  description: 'Get your converted file instantly. Share or download with a single click.'
                }
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Real feedback from professionals who rely on WindSurf daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Marketing Director at TechCorp',
                image: 'https://randomuser.me/api/portraits/women/43.jpg',
                feedback: 'WindSurf has completely transformed our document workflow. The AI summarizer saves us hours every week.'
              },
              {
                name: 'Michael Chen',
                role: 'Freelance Developer',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                feedback: 'The OCR feature is incredibly accurate, even with my messy handwriting. A must-have tool for any developer.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'HR Manager at StartUpX',
                image: 'https://randomuser.me/api/portraits/women/28.jpg',
                feedback: 'Converting hundreds of resumes to PDF used to take hours. Now it\'s done in minutes with perfect formatting.'
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white text-2xl font-bold">WindSurf</span>
          <p className="mt-2">Fast, unlimited PDF & file tools. AI-powered for efficiency.</p>
          <p className="mt-4 text-gray-400 text-sm">&copy; {new Date().getFullYear()} WindSurf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
