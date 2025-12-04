"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroGlobeOverlay from '@/components/sections/hero/HeroGlobeOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Zap, Star, Award, Building2, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="noiseGradient"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874646379-ve6hov8k.jpg"
          logoAlt="Webild Logo"
          brandName="Webild"
          button={{
            text: "Start Building",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroGlobeOverlay
          title="Chat With Your Websites"
          description="Webild is an AI-powered chatbot platform that transforms your website into an intelligent conversational experience. Engage visitors, automate support, and boost conversions with natural language processing."
          tag="AI-Powered Chat"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Try It Free",
              href: "#pricing"
            },
            {
              text: "Watch Demo",
              href: "#about"
            }
          ]}
          ariaLabel="Webild AI Chat Hero Section"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Webild"
          description={[
            "Webild brings conversational AI to your website without complex coding. Our platform enables real-time conversations that understand context, learn from interactions, and provide personalized responses to every visitor.",
            "Built for businesses of all sizes, Webild handles customer inquiries, qualifies leads, and gathers insights—all while your team sleeps. Deploy in minutes, not months."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "#features"
            }
          ]}
          showBorder={false}
          useInvertedBackground="noInvert"
          ariaLabel="About Webild Section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThirteen
          title="Powerful Features"
          description="Everything you need to build AI conversations that convert"
          tag="Core Capabilities"
          tagIcon={Zap}
          features={[
            {
              id: "01",
              title: "Natural Conversations",
              description: "Advanced NLP understands context, intent, and nuance. Your AI chatbot responds like a human, not a bot."
            },
            {
              id: "02",
              title: "Smart Lead Qualification",
              description: "Automatically qualify leads during conversations. Route high-value prospects to your sales team instantly."
            },
            {
              id: "03",
              title: "24/7 Customer Support",
              description: "Instant responses to common questions. Your customers get help anytime, anywhere—no waiting for Monday morning."
            },
            {
              id: "04",
              title: "Deep Analytics",
              description: "Understand every conversation. Track sentiment, identify pain points, and optimize your messaging based on real data."
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Webild Features Section"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your needs. No hidden fees. Cancel anytime."
          tag="Pricing"
          tagIcon={Sparkles}
          plans={[
            {
              id: "starter",
              badge: "Getting Started",
              price: "$29/mo",
              subtitle: "Perfect for small websites",
              buttons: [
                {
                  text: "Get Started",
                  href: "#contact"
                }
              ],
              features: [
                "Up to 1,000 conversations/month",
                "Basic chat customization",
                "Email support",
                "Analytics dashboard"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/mo",
              subtitle: "For growing businesses",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "#contact"
                }
              ],
              features: [
                "Up to 10,000 conversations/month",
                "Advanced AI customization",
                "Priority support",
                "Lead qualification",
                "API access",
                "Custom integrations"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              price: "Custom",
              subtitle: "For large-scale operations",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "#contact"
                }
              ],
              features: [
                "Unlimited conversations",
                "White-label solution",
                "Dedicated support",
                "Advanced security",
                "Custom integrations",
                "SLA guarantee"
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Webild Pricing Section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="Loved by Teams Everywhere"
          description="See how businesses are using Webild to transform customer conversations"
          tag="Success Stories"
          tagIcon={Award}
          testimonials={[
            {
              id: "1",
              nameTitle: "Sarah Chen, CEO of TechVenture",
              quote: "Webild cut our support tickets by 60% in the first month. Our customers love getting instant answers, and our team loves having more time for strategic work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874650254-8z0ruxxe.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              nameTitle: "Marcus Johnson, Founder of GrowthCo",
              quote: "The lead qualification feature alone has increased our sales team's conversion rate by 40%. It's like having a tireless sales rep working 24/7.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874650773-ebcob78h.png",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              nameTitle: "Elena Rodriguez, Marketing Director at DigitalPro",
              quote: "Setting up Webild was incredibly easy. Within 15 minutes, our website had a fully functional AI chat. The results have been amazing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874651299-y8igy7c7.jpg",
              imageAlt: "Elena Rodriguez"
            },
            {
              id: "4",
              nameTitle: "David Park, VP Product at CloudScale",
              quote: "The analytics insights have completely changed how we understand our customers. We now make product decisions based on real conversation data.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874652035-le7kie37.jpg",
              imageAlt: "David Park"
            },
            {
              id: "5",
              nameTitle: "Jessica Liu, Operations Manager at StartupXYZ",
              quote: "Best investment we made this year. Webild has freed up our team to focus on what really matters: growing the business.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874652695-v4l7vxna.jpg",
              imageAlt: "Jessica Liu"
            },
            {
              id: "6",
              nameTitle: "Robert Williams, CTO at InnovateLab",
              quote: "The API integration was seamless. Webild plugs right into our existing tech stack without any hassle.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874653362-booua5ms.jpg",
              imageAlt: "Robert Williams"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Webild Testimonials Section"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies using Webild to power their customer conversations"
          tag="Partners"
          tagIcon={Building2}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874654078-rg6re343.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874654560-gu003xax.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874655180-h5zky2lk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874655723-17k55nkk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874656413-qc5bj1ss.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874656868-8a7r9ol3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874657340-5r9sj79u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764874658041-y8mn1mmd.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="Webild Social Proof Section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Webild"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How long does it take to set up Webild?",
              content: "Most customers have Webild running in less than 15 minutes. Simply connect your website, customize your chat personality, and you're done. No coding required."
            },
            {
              id: "2",
              title: "Can Webild integrate with my CRM?",
              content: "Yes! Webild integrates with popular CRMs like Salesforce, HubSpot, Pipedrive, and many others. We also provide a flexible API for custom integrations."
            },
            {
              id: "3",
              title: "Is my customer data secure?",
              content: "Absolutely. We use enterprise-grade encryption, comply with GDPR and SOC 2, and store all data in secure, redundant servers. Your data is your data."
            },
            {
              id: "4",
              title: "Can I customize the chat appearance?",
              content: "Yes, completely. Customize colors, fonts, position, and behavior to match your brand perfectly. Create a unique experience that reflects your company's personality."
            },
            {
              id: "5",
              title: "What if I need help?",
              content: "Our support team is here for you. Starter plans get email support, Pro and Enterprise plans get priority support with guaranteed response times."
            },
            {
              id: "6",
              title: "Can I try Webild for free?",
              content: "Absolutely! Try our Pro plan free for 14 days. No credit card required. Full access to all features so you can see the difference Webild makes."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="Webild FAQ Section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to transform your website into a conversation powerhouse?"
          animationType="entrance-slide"
          inputPlaceholder="Enter your email to get started"
          buttonText="Start Building"
          useInvertedBackground="noInvert"
          ariaLabel="Webild Contact Section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Webild"
          columns={[
            {
              items: [
                {
                  label: "Features",
                  href: "#features"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                },
                {
                  label: "Testimonials",
                  href: "#testimonials"
                }
              ]
            },
            {
              items: [
                {
                  label: "About",
                  href: "#about"
                },
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "/terms"
                },
                {
                  label: "Security",
                  href: "/security"
                }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}