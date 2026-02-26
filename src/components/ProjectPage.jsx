import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getProjectById } from "../data/projects";
import {
  ExternalLink,
  Github,
  Globe,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import ProjectLinkButton from "./ProjectLinkButton";
import BackLink from "./ui/BackLink";
import StatusBadge from "./ui/StatusBadge";
import DocumentHead from "./ui/DocumentHead";

const ProjectPage = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-display font-bold text-text mb-4">
            Project Not Found
          </h1>
          <p className="text-muted">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedImage) {
        closeImageModal();
      }

      // Carousel navigation with arrow keys
      if (project.additionalImages && project.additionalImages.length > 1) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          previousImage();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          nextImage();
        }
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (selectedImage) {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedImage, project.additionalImages]);


  const handleImageClick = (imageSrc, imageAlt) => {
    setImageLoading(true);
    setSelectedImage({ src: imageSrc, alt: imageAlt });

    // Simulate loading for better UX
    const img = new Image();
    img.onload = () => setImageLoading(false);
    img.src = imageSrc;
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (project.additionalImages) {
      setCurrentImageIndex((prev) =>
        prev === project.additionalImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (project.additionalImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.additionalImages.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const pageTitle = `${project.title} | Projects | Giovani Ohira`;
  const pageDescription = project.description?.slice(0, 155) + (project.description?.length > 155 ? "…" : "") || `Project: ${project.title}. By Giovani Ohira.`;

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <DocumentHead title={pageTitle} description={pageDescription} />
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <BackLink to="/projects" label="Back to Projects" className="text-accent hover:opacity-90" />
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium">
              <StatusBadge status={project.status} className={project.status === "completed" ? "text-green-400" : "text-yellow-400"} />
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-light mb-6 text-text">
            {project.title}
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div
            className="relative rounded-lg overflow-hidden aspect-video cursor-pointer transition-opacity duration-300 hover:opacity-90"
            onClick={() =>
              handleImageClick(
                project.image,
                `${project.title} - Main Screenshot`
              )
            }
          >
            <img
              src={project.image}
              className="w-full h-full object-cover"
              alt={project.title}
            />
          </div>

          {/* Technologies Used */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-text mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm text-muted border border-border rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Simple Separator */}
        <div className="border-t border-border my-16"></div>

        {/* Additional Images Gallery */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-text mb-2">
                Gallery
              </h3>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main Carousel Image */}
              <div className="relative rounded-lg overflow-hidden aspect-video cursor-pointer transition-opacity duration-300 hover:opacity-90">
                <img
                  src={project.additionalImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() =>
                    handleImageClick(
                      project.additionalImages[currentImageIndex],
                      `${project.title} - Image ${currentImageIndex + 1}`
                    )
                  }
                />
              </div>

              {/* Navigation Arrows */}
              {project.additionalImages.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-text rounded p-2 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-text rounded p-2 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-black/30 text-text px-2 py-1 rounded text-sm">
                {currentImageIndex + 1} / {project.additionalImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {project.additionalImages.length > 1 && (
              <div className="mt-6">
                <div className="flex justify-center gap-2">
                  {project.additionalImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative rounded overflow-hidden aspect-video w-16 transition-all duration-300 ${
                        index === currentImageIndex
                          ? "ring-2 ring-white/50"
                          : "opacity-60 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-text">
              Details
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-muted text-sm">Date:</span>
                <p className="text-text">
                  {project.date
                    ? new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "In Progress"}
                </p>
              </div>
              <div>
                <span className="text-muted text-sm">Status:</span>
                <p
                  className={`capitalize ${
                    project.status === "completed"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {project.status}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-text">
              Links
            </h3>
            <div className="space-y-3">
              {/* Live Demo */}
              {project.links && project.links.liveDemo && (
                <ProjectLinkButton
                  type="demo"
                  href={project.links.liveDemo}
                />
              )}
              {/* View on GitHub */}
              {project.links && project.links.github && (
                <ProjectLinkButton
                  type="github"
                  href={project.links.github}
                />
              )}
              {/* View Article */}
              {project.links && project.links.article && (
                <ProjectLinkButton
                  type="article"
                  href={project.links.article}
                />
              )}
              {/* NPM Package */}
              {project.links && project.links.npm && (
                <ProjectLinkButton
                  type="npm"
                  href={project.links.npm}
                />
              )}
              {/* Fallback message if no actions available */}
              {(!project.links || Object.keys(project.links).length === 0) && (
                <div className="text-center py-6 text-muted">
                  <p className="text-sm">
                    No external links available
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Project Features & Architecture */}
        {project.features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-text">
                  Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                    >
                      <span className="text-muted mr-3 mt-1">•</span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture */}
              {project.architecture && (
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-text">
                    Architecture
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(project.architecture).map(
                      ([key, value]) => (
                        <div key={key}>
                          <span className="text-muted text-sm capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <p className="text-text mt-1">{value}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-light text-text mb-8">
            About This Project
          </h2>
          <div className="space-y-6">
            <p className="text-muted leading-relaxed whitespace-pre-line">
              {project.longDescription || project.description}
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-border hover:border-accent/60 text-text rounded transition-all duration-300"
          >
            <Globe className="w-4 h-4 mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black/30 hover:bg-black/50 rounded p-2 text-text transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative">
              {imageLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded">
                  <svg
                    className="animate-spin h-8 w-8 text-text"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] object-contain rounded"
                  onClick={(e) => e.stopPropagation()}
                />
              )}

              {/* Image Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded p-3 text-text">
                <p className="text-sm">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectPage;
