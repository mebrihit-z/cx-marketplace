import { useState } from 'react';

// SVG icon data URIs for command and send icons
const commandIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23333740' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'/%3E%3C/svg%3E`;

const sendIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M7 11L12 6L17 11M12 18V7' stroke='%23333740' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`;


const marketplaceLogo = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Ccircle cx='16' cy='16' r='16' fill='%238cc63f'/%3E%3Crect x='9' y='9' width='14' height='14' fill='white' opacity='0.3'/%3E%3C/svg%3E`;

const backArrowIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M12.5 15L7.5 10L12.5 5' stroke='%23111215' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`;

const forwardArrowIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7.5 5L12.5 10L7.5 15' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`;

const checkCircleIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'%3E%3Ccircle cx='5' cy='5' r='5' fill='%238cc63f'/%3E%3Cpath d='M3 5L4.5 6.5L7 3.5' stroke='white' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`;

const emptyCircleIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'%3E%3Ccircle cx='5' cy='5' r='5' fill='%23d0d1d4'/%3E%3C/svg%3E`;

interface SuggestedPrompt {
  id: number;
  label: string;
  prompt: string;
}

const suggestedPrompts: SuggestedPrompt[] = [
  {
    id: 1,
    label: "Suggested by AI",
    prompt: "Create an online store for handmade items"
  },
  {
    id: 2,
    label: "Suggested by AI",
    prompt: "Make a website for an annual tech conference"
  },
  {
    id: 3,
    label: "Suggested by AI",
    prompt: "Design a website for an advertising agency"
  },
  {
    id: 4,
    label: "Suggested by AI",
    prompt: "Create a website for a new plant-based restaurant"
  }
];

const followUpPrompts: SuggestedPrompt[] = [
  {
    id: 5,
    label: "Suggested by AI",
    prompt: "Generate leads or inquiries"
  },
  {
    id: 6,
    label: "Suggested by AI",
    prompt: "Promote service/offering(s)"
  },
  {
    id: 7,
    label: "Suggested by AI",
    prompt: "Build a brand presence or awareness"
  }
];

const featurePrompts: SuggestedPrompt[] = [
  {
    id: 8,
    label: "Suggested by AI",
    prompt: "Case studies"
  },
  {
    id: 9,
    label: "Suggested by AI",
    prompt: "About us"
  },
  {
    id: 10,
    label: "Suggested by AI",
    prompt: "Testimonials"
  },
  {
    id: 11,
    label: "Suggested by AI",
    prompt: "Sponsor/partner logos"
  },
  {
    id: 12,
    label: "Suggested by AI",
    prompt: "Lead generation form"
  },
  {
    id: 13,
    label: "Suggested by AI",
    prompt: "Careers directory"
  }
];

const stylePrompts: SuggestedPrompt[] = [
  {
    id: 14,
    label: "Suggested by AI",
    prompt: "Modern & minimal"
  },
  {
    id: 15,
    label: "Suggested by AI",
    prompt: "Bold & vibrant"
  },
  {
    id: 16,
    label: "Suggested by AI",
    prompt: "Tech & futuristic"
  },
  {
    id: 17,
    label: "Suggested by AI",
    prompt: "Friendly & approachable"
  },
  {
    id: 18,
    label: "Suggested by AI",
    prompt: "Creative & playful"
  },
  {
    id: 19,
    label: "Suggested by AI",
    prompt: "Professional & corporate"
  }
];

const brandingPrompts: SuggestedPrompt[] = [
  {
    id: 20,
    label: "Suggested by AI",
    prompt: "Pull from my current site"
  },
  {
    id: 21,
    label: "Suggested by AI",
    prompt: "Upload my own files"
  },
  {
    id: 22,
    label: "Suggested by AI",
    prompt: "Decide the branding for me"
  }
];

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  content: string;
  isTyping?: boolean;
  showFollowUpPrompts?: boolean;
  showFeaturePrompts?: boolean;
  showStylePrompts?: boolean;
  showBrandingPrompts?: boolean;
}



export default function CreatePage() {
  const [promptInput, setPromptInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [conversationStep, setConversationStep] = useState(0); // 0: initial, 1: goals, 2: features, 3: styles, 4: branding, 5: final
  const [selectedFollowUps, setSelectedFollowUps] = useState<number[]>([]); // Track selected goal prompt IDs
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]); // Track selected feature prompt IDs
  const [selectedStyles, setSelectedStyles] = useState<number[]>([]); // Track selected style prompt IDs
  const [selectedBranding, setSelectedBranding] = useState<number[]>([]); // Track selected branding prompt ID
  const [websiteUrl, setWebsiteUrl] = useState<string>(''); // Track URL input for "Pull from my current site"
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]); // Track uploaded files
  const [websiteType, setWebsiteType] = useState<string>(''); // Track the type of website being created
  const [previewImage, setPreviewImage] = useState('/images/template-preview-image.svg'); // Track preview image

  // Map initial prompts to website types
  const getWebsiteType = (prompt: string): string => {
    if (prompt.includes('online store') || prompt.includes('handmade items')) {
      return 'online store website';
    } else if (prompt.includes('tech conference') || prompt.includes('annual')) {
      return 'annual tech conference website';
    } else if (prompt.includes('advertising agency')) {
      return 'advertising agency website';
    } else if (prompt.includes('plant-based restaurant') || prompt.includes('restaurant')) {
      return 'plant-based restaurant website';
    }
    return 'website';
  };

  const handlePromptClick = (prompt: string) => {
    // Hide all prompts from previous AI message
    setChatMessages(prev => 
      prev.map(msg => ({
        ...msg,
        showFollowUpPrompts: false,
        showFeaturePrompts: false,
        showStylePrompts: false,
        showBrandingPrompts: false
      }))
    );
    
    // Set website type if this is the first prompt
    if (conversationStep === 0) {
      setWebsiteType(getWebsiteType(prompt));
    }
    
    handleSubmitPrompt(prompt);
  };

  const handleFollowUpToggle = (id: number) => {
    setSelectedFollowUps(prev => {
      if (prev.includes(id)) {
        // Deselect if already selected
        return prev.filter(promptId => promptId !== id);
      } else {
        // Add to selection
        return [...prev, id];
      }
    });
  };

  const handleFeatureToggle = (id: number) => {
    setSelectedFeatures(prev => {
      if (prev.includes(id)) {
        // Deselect if already selected
        return prev.filter(promptId => promptId !== id);
      } else {
        // Add to selection
        return [...prev, id];
      }
    });
  };

  const handleStyleToggle = (id: number) => {
    setSelectedStyles(prev => {
      if (prev.includes(id)) {
        // Deselect if already selected
        return [];
      } else {
        // Replace with new selection (only one allowed)
        return [id];
      }
    });
  };

  const handleBrandingToggle = (id: number) => {
    setSelectedBranding(prev => {
      if (prev.includes(id)) {
        // Deselect if already selected
        setUploadedFiles([]); // Clear uploaded files when deselecting
        return [];
      } else {
        // Replace with new selection (only one allowed)
        setUploadedFiles([]); // Clear uploaded files when changing selection
        return [id];
      }
    });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmitFollowUps = () => {
    if (selectedFollowUps.length > 0) {
      // Hide follow-up prompts
      setChatMessages(prev => 
        prev.map(msg => ({
          ...msg,
          showFollowUpPrompts: false
        }))
      );

      // Get the selected prompt texts
      const selectedTexts = followUpPrompts
        .filter(p => selectedFollowUps.includes(p.id))
        .map(p => p.prompt)
        .join(', ');

      // Add user message with selected prompts
      const userMessage: ChatMessage = {
        id: Date.now(),
        type: 'user',
        content: selectedTexts
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setSelectedFollowUps([]);
      
      // Show typing indicator
      setTimeout(() => {
        const typingMessage: ChatMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: '',
          isTyping: true
        };
        setChatMessages(prev => [...prev, typingMessage]);
        
        // AI asks about features
        setTimeout(() => {
          setChatMessages(prev => 
            prev.map(msg => 
              msg.isTyping 
                ? { 
                    ...msg, 
                    content: `What features does your ${websiteType} need?`,
                    isTyping: false,
                    showFeaturePrompts: true
                  }
                : msg
            )
          );
          
          setConversationStep(2);
        }, 2000);
      }, 500);
    }
  };

  const handleSubmitFeatures = () => {
    if (selectedFeatures.length > 0) {
      // Hide feature prompts
      setChatMessages(prev => 
        prev.map(msg => ({
          ...msg,
          showFeaturePrompts: false
        }))
      );

      // Get the selected feature texts
      const selectedTexts = featurePrompts
        .filter(p => selectedFeatures.includes(p.id))
        .map(p => p.prompt)
        .join(', ');

      // Add user message with selected features
      const userMessage: ChatMessage = {
        id: Date.now(),
        type: 'user',
        content: selectedTexts
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setSelectedFeatures([]);
      
      // Show typing indicator
      setTimeout(() => {
        const typingMessage: ChatMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: '',
          isTyping: true
        };
        setChatMessages(prev => [...prev, typingMessage]);
        
        // AI asks about visual style
        setTimeout(() => {
          setChatMessages(prev => 
            prev.map(msg => 
              msg.isTyping 
                ? { 
                    ...msg, 
                    content: 'What visual style and tone are you looking for?',
                    isTyping: false,
                    showStylePrompts: true
                  }
                : msg
            )
          );
          
          setConversationStep(3);
        }, 2000);
      }, 500);
    }
  };

  const handleSubmitStyles = () => {
    if (selectedStyles.length > 0) {
      // Hide style prompts
      setChatMessages(prev => 
        prev.map(msg => ({
          ...msg,
          showStylePrompts: false
        }))
      );

      // Get the selected style texts
      const selectedTexts = stylePrompts
        .filter(p => selectedStyles.includes(p.id))
        .map(p => p.prompt)
        .join(', ');

      // Add user message with selected styles
      const userMessage: ChatMessage = {
        id: Date.now(),
        type: 'user',
        content: selectedTexts
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setSelectedStyles([]);
      
      // Show typing indicator
      setTimeout(() => {
        const typingMessage: ChatMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: '',
          isTyping: true
        };
        setChatMessages(prev => [...prev, typingMessage]);
        
        // AI asks about branding
        setTimeout(() => {
          setChatMessages(prev => 
            prev.map(msg => 
              msg.isTyping 
                ? { 
                    ...msg, 
                    content: 'How would you like to share your brand colors, fonts, and logos?',
                    isTyping: false,
                    showBrandingPrompts: true
                  }
                : msg
            )
          );
          
          // Update preview image after style selection
          setPreviewImage('/images/template-preview-image-3.svg');
          
          setConversationStep(4);
        }, 2000);
      }, 500);
    }
  };

  const handleSubmitBranding = () => {
    if (selectedBranding.length > 0) {
      // Check if URL is required and not provided
      const selectedBrandingId = selectedBranding[0];
      const isPullFromSite = selectedBrandingId === 20;
      
      if (isPullFromSite && !websiteUrl.trim()) {
        return; // Don't submit if URL is required but not provided
      }

      // Hide branding prompts
      setChatMessages(prev => 
        prev.map(msg => ({
          ...msg,
          showBrandingPrompts: false
        }))
      );

      // Get the selected branding text
      const selectedText = brandingPrompts
        .find(p => p.id === selectedBrandingId)
        ?.prompt || '';

      // Add user message with selected branding (and URL if applicable)
      const content = isPullFromSite && websiteUrl.trim() 
        ? `${selectedText}: ${websiteUrl}` 
        : selectedText;

      const userMessage: ChatMessage = {
        id: Date.now(),
        type: 'user',
        content
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setSelectedBranding([]);
      setWebsiteUrl('');
      setUploadedFiles([]);
      
      // Show typing indicator
      setTimeout(() => {
        const typingMessage: ChatMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: '',
          isTyping: true
        };
        setChatMessages(prev => [...prev, typingMessage]);
        
        // Final AI response
        setTimeout(() => {
          setChatMessages(prev => 
            prev.map(msg => 
              msg.isTyping 
                ? { 
                    ...msg, 
                    content: 'Your custom website template is ready! Now we\'ll match you to the right pricing package for your needs.',
                    isTyping: false
                  }
                : msg
            )
          );
          
          setConversationStep(5);
        }, 2000);
      }, 500);
    }
  };

  const handleSubmitPrompt = (prompt: string) => {
    if (prompt.trim()) {
      // Hide suggestions
      setShowSuggestions(false);
      
      // Set website type if this is the first prompt and it hasn't been set yet
      if (conversationStep === 0 && !websiteType) {
        setWebsiteType(getWebsiteType(prompt));
      }
      
      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now(),
        type: 'user',
        content: prompt
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setPromptInput('');
      
      // Show typing indicator after a brief delay
      setTimeout(() => {
        const typingMessage: ChatMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: '',
          isTyping: true
        };
        setChatMessages(prev => [...prev, typingMessage]);
        
        // Simulate AI response after 2 seconds
        setTimeout(() => {
          const isFirstPrompt = conversationStep === 0;
          const currentWebsiteType = websiteType || getWebsiteType(prompt);
          
          setChatMessages(prev => 
            prev.map(msg => 
              msg.isTyping 
                ? { 
                    ...msg, 
                    content: isFirstPrompt 
                      ? `What is the main goal of your ${currentWebsiteType}?`
                      : 'Perfect! I\'ve generated a website template for you based on your request. You can preview it on the right side of the screen.',
                    isTyping: false,
                    showFollowUpPrompts: isFirstPrompt
                  }
                : msg
            )
          );
          
          // Update preview image after first prompt
          if (isFirstPrompt) {
            setPreviewImage('/images/template-preview-image-2.svg');
          }
          
          // Increment conversation step
          setConversationStep(prev => prev + 1);
        }, 2000);
      }, 500);
    }
  };

  const handleSubmit = () => {
    handleSubmitPrompt(promptInput);
  };

  const handleBack = () => {
    // Reset everything to initial state
    setChatMessages([]);
    setShowSuggestions(true);
    setPromptInput('');
    setConversationStep(0);
    setSelectedFollowUps([]);
    setSelectedFeatures([]);
    setSelectedStyles([]);
    setSelectedBranding([]);
    setWebsiteUrl('');
    setUploadedFiles([]);
    setWebsiteType('');
    setPreviewImage('/images/template-preview-image.svg');
  };

  const handleNext = () => {
    if (conversationStep === 1 && selectedFollowUps.length > 0) {
      // If we're at step 1 with goal selections, submit them
      handleSubmitFollowUps();
    } else if (conversationStep === 2 && selectedFeatures.length > 0) {
      // If we're at step 2 with feature selections, submit them
      handleSubmitFeatures();
    } else if (conversationStep === 3 && selectedStyles.length > 0) {
      // If we're at step 3 with style selections, submit them
      handleSubmitStyles();
    } else if (conversationStep === 4 && selectedBranding.length > 0) {
      // If we're at step 4 with branding selection, submit it
      handleSubmitBranding();
    } else if (conversationStep === 5) {
      // Final step - "Get a Quote" button clicked
      console.log('Get a Quote clicked - navigate to pricing or quote page');
      // TODO: Navigate to pricing page or show quote form
    } else {
    console.log('Moving to next step...');
    // Add logic for next step
    }
  };

  // Show Back/Next buttons when at step 1 (goals) or step 2 (features) or step 3 (styles) or step 4 (branding) or step 5 (final)
  
  // Show chat input only when not showing action buttons
  const showChatInput = conversationStep === 0;

  return (
    <div className="w-full flex flex-col create-page-override" style={{ background: 'linear-gradient(242.27deg, rgba(86, 152, 0, 0.1) 4%, rgba(231, 255, 201, 0.1) 43.62%, rgba(0, 167, 72, 0.1) 85.58%)', minHeight: '0 !important', height: 'auto !important' }}>
      <style>{`
        .create-page-override {
          min-height: 0 !important;
          height: auto !important;
        }
        .create-page-override * {
          min-height: 0 !important;
        }
        .create-page-override,
        .create-page-override > *,
        .create-page-override > * > * {
          min-height: 0 !important;
          height: auto !important;
        }
        /* Override any min-h-screen classes */
        .min-h-screen {
          min-height: 0 !important;
        }
        
        /* Content Area */
        .content-area {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 90px 60px;
          width: 100%;
        }
        
        @media (min-width: 1280px) {
          .content-area {
            flex-direction: row;
          }
        }
        
        /* Main Container */
        .main-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        @media (min-width: 1280px) {
          .main-container {
            flex-direction: row;
            gap: 4rem;
          }
        }
        
        /* Chat Area Container */
        .chat-area-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .chat-area-container {
            gap: 5rem;
          }
        }
        
        @media (min-width: 1280px) {
          .chat-area-container {
            width: 392px;
            max-width: 392px;
            flex-shrink: 0;
          }
        }
        
        /* Chat Title Container */
        .chat-title-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .chat-title-container {
            gap: 1.5rem;
          }
        }
        
        /* Chat Content Container - Clean Start */
        .chat-content-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 1rem 0;
        }
        
        /* Chat Text Box Container */
        .chat-text-box-container {
          margin-top: 2rem;
        }
        
        /* Chat Message Spacing - Simple and Clean */
        .chat-message {
          margin-bottom: 2rem;
        }
        
        .chat-message:last-child {
          margin-bottom: 0;
        }
        
        /* Image Area Container */
        .image-area-container {
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          height: 400px;
        }
        
        @media (min-width: 640px) {
          .image-area-container {
            height: 500px;
          }
        }
        
        @media (min-width: 768px) {
          .image-area-container {
            height: 600px;
          }
        }
        
        @media (min-width: 1024px) {
          .image-area-container {
            height: 700px;
          }
        }
        
        @media (min-width: 1280px) {
          .image-area-container {
            flex: 1;
            height: 730px;
            max-width: none;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
      {/* Header Area - Already set and ready */}
      
      {/* Content Area */}
      <div className="content-area" style={{ minHeight: '0 !important' }}>
        {/* Main Container */}
        <div className="main-container">
          {/* Chat Area Container */}
          <div className="chat-area-container">
            {/* Chat Title Container */}
            <div className="chat-title-container">
              <h1 className="font-semibold text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-[#22252b]">
              Create your perfect website template
            </h1>
          </div>

            {/* Chat Content Container */}
            <div className="chat-content-container">
            {/* Chat Messages or Suggested Prompts */}
            {showSuggestions ? (
              <div className="chat-message">
                <p className="font-['Inter'] text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] text-[#333740] mb-4">
                  Select a prompt to get started
                </p>
                <div className="flex flex-wrap gap-4">
                  {suggestedPrompts.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handlePromptClick(item.prompt)}
                      className="bg-white border border-[#d0d1d4] rounded-xl p-4 w-[188px] h-[140px] flex flex-col gap-2 hover:border-[#8cc63f] hover:shadow-md transition-all cursor-pointer text-left"
                    >
                      <p className="font-['Inter'] text-[12px] leading-[18px] text-[#737780]">
                        {item.label}
                      </p>
                      <p className="font-['Inter'] text-[14px] leading-[18px] text-[#333740]">
                        {item.prompt}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className="chat-message">
                    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'items-start gap-2'}`}>
                    {message.type === 'ai' && (
                      <div className="flex-shrink-0 w-8 h-8">
                        <img src={marketplaceLogo} alt="AI" className="w-full h-full" />
                      </div>
                    )}
                    <div className={`${message.type === 'user' ? 'ml-10' : 'flex-1'}`}>
                      {message.isTyping ? (
                        <div className="flex items-center gap-1 p-2">
                          <div className="w-2 h-2 bg-[#8cc63f] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-[#8cc63f] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-[#8cc63f] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      ) : (
                        <div className={`${
                          message.type === 'user' 
                            ? 'bg-white border border-[#d0d1d4] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl p-4' 
                            : 'bg-white border border-[#d0d1d4] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-4'
                        }`}>
                          <p className="font-['Inter'] text-[14px] leading-[18px] text-[#333740]">
                            {message.content}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                    {/* Show follow-up prompts if this is an AI message with follow-up prompts */}
                    {message.type === 'ai' && message.showFollowUpPrompts && (
                      <div className="flex flex-col gap-3 items-end ml-4 md:ml-10 mt-4">
                        {followUpPrompts.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleFollowUpToggle(item.id)}
                            className={`bg-white border rounded-lg px-4 py-4 hover:shadow-sm transition-all cursor-pointer text-left w-full max-w-[320px] flex items-center justify-between gap-4 ${
                              selectedFollowUps.includes(item.id) 
                                ? 'border-[#8cc63f] bg-[#f0f9e8]' 
                                : 'border-[#d0d1d4]'
                            }`}
                          >
                            <p className="font-['Inter'] text-[14px] leading-[20px] text-[#333740] flex-1">
                              {item.prompt}
                            </p>
                            <img 
                              src={selectedFollowUps.includes(item.id) ? checkCircleIcon : emptyCircleIcon} 
                              alt={selectedFollowUps.includes(item.id) ? "Selected" : "Not selected"} 
                              className="w-2.5 h-2.5 flex-shrink-0" 
                            />
                          </button>
                        ))}
                      </div>
                    )}
                    {/* Show feature prompts if this is an AI message with feature prompts */}
                    {message.type === 'ai' && message.showFeaturePrompts && (
                      <div className="flex flex-col gap-3 items-end ml-4 md:ml-10 mt-4">
                        {featurePrompts.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleFeatureToggle(item.id)}
                            className={`bg-white border rounded-lg px-4 py-4 hover:shadow-sm transition-all cursor-pointer text-left w-full max-w-[320px] flex items-center justify-between gap-4 ${
                              selectedFeatures.includes(item.id) 
                                ? 'border-[#8cc63f] bg-[#f0f9e8]' 
                                : 'border-[#d0d1d4]'
                            }`}
                          >
                            <p className="font-['Inter'] text-[14px] leading-[20px] text-[#333740] flex-1">
                              {item.prompt}
                            </p>
                            <img 
                              src={selectedFeatures.includes(item.id) ? checkCircleIcon : emptyCircleIcon} 
                              alt={selectedFeatures.includes(item.id) ? "Selected" : "Not selected"} 
                              className="w-2.5 h-2.5 flex-shrink-0" 
                            />
                          </button>
                        ))}
                      </div>
                    )}
                    {/* Show style prompts if this is an AI message with style prompts */}
                    {message.type === 'ai' && message.showStylePrompts && (
                      <div className="flex flex-col gap-3 items-end ml-4 md:ml-10 mt-4">
                        {stylePrompts.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleStyleToggle(item.id)}
                            className={`bg-white border rounded-lg px-4 py-4 hover:shadow-sm transition-all cursor-pointer text-left w-full max-w-[320px] flex items-center justify-between gap-4 ${
                              selectedStyles.includes(item.id) 
                                ? 'border-[#8cc63f] bg-[#f0f9e8]' 
                                : 'border-[#d0d1d4]'
                            }`}
                          >
                            <p className="font-['Inter'] text-[14px] leading-[20px] text-[#333740] flex-1">
                              {item.prompt}
                            </p>
                            <img 
                              src={selectedStyles.includes(item.id) ? checkCircleIcon : emptyCircleIcon} 
                              alt={selectedStyles.includes(item.id) ? "Selected" : "Not selected"} 
                              className="w-2.5 h-2.5 flex-shrink-0" 
                            />
                          </button>
                ))}
              </div>
            )}
                    {/* Show branding prompts if this is an AI message with branding prompts */}
                    {message.type === 'ai' && message.showBrandingPrompts && (
                      <div className="flex flex-col gap-3 items-end ml-4 md:ml-10 mt-4">
                        {brandingPrompts.map((item) => (
                          <div key={item.id} className="flex flex-col gap-2 items-end w-full">
                <button
                              onClick={() => handleBrandingToggle(item.id)}
                              className={`bg-white border rounded-lg px-4 py-4 hover:shadow-sm transition-all cursor-pointer text-left w-full max-w-[320px] flex items-center justify-between gap-4 ${
                                selectedBranding.includes(item.id) 
                                  ? 'border-[#8cc63f] bg-[#f0f9e8]' 
                                  : 'border-[#d0d1d4]'
                              }`}
                            >
                              <p className="font-['Inter'] text-[14px] leading-[20px] text-[#333740] flex-1">
                                {item.prompt}
                              </p>
                              <img 
                                src={selectedBranding.includes(item.id) ? checkCircleIcon : emptyCircleIcon} 
                                alt={selectedBranding.includes(item.id) ? "Selected" : "Not selected"} 
                                className="w-2.5 h-2.5 flex-shrink-0" 
                              />
                </button>
                            {/* Show URL input if "Pull from my current site" is selected */}
                            {selectedBranding.includes(item.id) && item.id === 20 && (
                              <div className="w-full max-w-[320px] bg-[#f5f5f5] border border-[#d0d1d4] rounded-lg px-4 py-3">
                                <input
                                  type="url"
                                  value={websiteUrl}
                                  onChange={(e) => setWebsiteUrl(e.target.value)}
                                  placeholder="Enter your website URL"
                                  className="w-full font-['Inter'] text-[14px] leading-[20px] text-[#333740] placeholder:text-[#737780] outline-none bg-transparent"
                                />
                              </div>
                            )}
                            {/* Show upload area if "Upload my own files" is selected */}
                            {selectedBranding.includes(item.id) && item.id === 21 && (
                              <div className="w-full max-w-[320px] flex flex-col gap-2">
                                <div 
                                  onDrop={handleDrop}
                                  onDragOver={handleDragOver}
                                  onClick={() => document.getElementById('file-upload')?.click()}
                                  className="bg-[#f5f5f5] border-2 border-dashed border-[#d0d1d4] rounded-lg px-4 py-6 flex flex-col items-center gap-2 hover:border-[#8cc63f] transition-colors cursor-pointer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#737780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="17 8 12 3 7 8"/>
                                    <line x1="12" y1="3" x2="12" y2="15"/>
                                  </svg>
                                  <p className="font-['Inter'] text-[13px] leading-[18px] text-[#737780] text-center">
                                    Drop files here or click to upload
                                  </p>
                                  <p className="font-['Inter'] text-[11px] leading-[16px] text-[#999] text-center">
                                    PNG, JPG, SVG up to 10MB
                                  </p>
                                  <input
                                    id="file-upload"
                                    type="file"
                                    multiple
                                    accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                  />
                                </div>
                                {/* Display uploaded files */}
                                {uploadedFiles.length > 0 && (
                                  <div className="flex flex-col gap-2">
                                    {uploadedFiles.map((file, index) => (
                                      <div
                                        key={index}
                                        className="bg-white border border-[#d0d1d4] rounded-lg px-3 py-2 flex items-center justify-between gap-2"
                                      >
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                            <polyline points="13 2 13 9 20 9"/>
                                          </svg>
                                          <p className="font-['Inter'] text-[12px] leading-[16px] text-[#333740] truncate">
                                            {file.name}
                                          </p>
                                          <p className="font-['Inter'] text-[11px] leading-[16px] text-[#999] flex-shrink-0">
                                            {(file.size / 1024).toFixed(1)} KB
                                          </p>
                                        </div>
                <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveFile(index);
                                          }}
                                          className="flex-shrink-0 text-[#999] hover:text-[#333740] transition-colors"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"/>
                                            <line x1="6" y1="6" x2="18" y2="18"/>
                                          </svg>
                </button>
              </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

              {/* Chat Text Box Container - Now part of scrollable content */}
              <div className="chat-text-box-container">
                {showChatInput ? (
                  <div className="flex gap-2 w-full">
                    {/* Command Button */}
                    <button className="bg-white border border-[#d0d1d4] rounded-2xl p-3 md:p-4 hover:border-[#8cc63f] transition-colors flex-shrink-0">
                      <img src={commandIcon} alt="Command" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Text Input with Send Button */}
                    <div className="flex-1 bg-white border border-[#d0d1d4] rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-2 md:gap-4">
                      <input
                        type="text"
                        value={promptInput}
                        onChange={(e) => setPromptInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        placeholder="Type something here..."
                        className="flex-1 font-['Inter'] text-[14px] leading-[1.5] text-[#333740] placeholder:text-[#737780] outline-none bg-transparent"
                      />
                      <button
                        onClick={handleSubmit}
                        className="transform rotate-45 hover:scale-110 transition-transform"
                        aria-label="Send"
                      >
                        <img src={sendIcon} alt="Send" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full gap-4">
                    {/* Back Button */}
                    <button
                      onClick={handleBack}
                      className="bg-white border border-[#d0d1d4] rounded-lg px-4 md:px-6 py-2.5 flex items-center justify-center gap-2 hover:border-[#8cc63f] hover:shadow-md transition-all"
                    >
                      <img src={backArrowIcon} alt="Back" className="w-5 h-5" />
                      <span className="font-['Inter'] text-[16px] leading-[20px] text-[#111215]">Back</span>
                    </button>

                    {/* Next/Get a Quote Button */}
                    <button
                      onClick={handleNext}
                      disabled={
                        (conversationStep === 1 && selectedFollowUps.length === 0) ||
                        (conversationStep === 2 && selectedFeatures.length === 0) ||
                        (conversationStep === 3 && selectedStyles.length === 0) ||
                        (conversationStep === 4 && (selectedBranding.length === 0 || (selectedBranding[0] === 20 && !websiteUrl.trim())))
                      }
                      className={`rounded-lg px-4 md:px-6 py-2.5 flex items-center justify-center gap-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-colors ${
                        (conversationStep === 1 && selectedFollowUps.length === 0) ||
                        (conversationStep === 2 && selectedFeatures.length === 0) ||
                        (conversationStep === 3 && selectedStyles.length === 0) ||
                        (conversationStep === 4 && (selectedBranding.length === 0 || (selectedBranding[0] === 20 && !websiteUrl.trim())))
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-[#0a7c00] hover:bg-[#0a6b00]'
                      }`}
                    >
                      <span className="font-['Inter'] text-[16px] leading-[20px] text-white">
                        {conversationStep === 5 ? 'Get a Quote' : 'Next'}
                      </span>
                      <img src={forwardArrowIcon} alt={conversationStep === 5 ? 'Get a Quote' : 'Next'} className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
        </div>

          {/* Image Area Container */}
          <div className="image-area-container">
          <div className="h-full overflow-y-auto">
            <img 
                src={previewImage} 
              alt="Template Preview" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      </div>

      {/* Footer Area - Already set and ready */}
    </div>
  );
}