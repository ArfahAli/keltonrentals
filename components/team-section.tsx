import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Award, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Michael Kelton",
    role: "Managing Director",
    experience: "25+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Michael+K",
    specialties: ["Business Operations", "Client Relations", "Strategic Planning"],
    description:
      "Michael founded Kelton Rentals with a vision to provide reliable equipment solutions to the construction industry.",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Manager",
    experience: "15+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+T",
    specialties: ["Fleet Management", "Logistics", "Quality Control"],
    description: "Sarah ensures our equipment is always maintained to the highest standards and delivered on time.",
  },
  {
    name: "David Chen",
    role: "Technical Supervisor",
    experience: "20+ Years",
    image: "/placeholder.svg?height=300&width=300&text=David+C",
    specialties: ["Equipment Maintenance", "Technical Support", "Safety Compliance"],
    description:
      "David leads our technical team, ensuring all equipment meets safety standards and operates efficiently.",
  },
  {
    name: "Lisa Rodriguez",
    role: "Customer Success Manager",
    experience: "12+ Years",
    image: "/placeholder.svg?height=300&width=300&text=Lisa+R",
    specialties: ["Customer Service", "Project Coordination", "Account Management"],
    description:
      "Lisa works closely with clients to understand their needs and ensure project success from start to finish.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Meet Our Expert Team</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals are dedicated to providing exceptional service and ensuring your project's
            success. With decades of combined experience, we understand the construction industry inside and out.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-blue-700" />
            </div>
            <div className="text-2xl font-bold text-slate-900">25+</div>
            <div className="text-slate-600 text-sm">Team Members</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">70+</div>
            <div className="text-slate-600 text-sm">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">24/7</div>
            <div className="text-slate-600 text-sm">Support Available</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-900">500+</div>
            <div className="text-slate-600 text-sm">Happy Clients</div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white group">
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-slate-900 font-semibold">{member.experience}</Badge>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.description}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-slate-300 text-slate-600">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work with Our Team?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experienced professionals are here to help you choose the right equipment and ensure your project runs
              smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0262138111"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Our Team: 02 6213 8111
              </a>
              <a
                href="mailto:rentals@kelton.biz"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
