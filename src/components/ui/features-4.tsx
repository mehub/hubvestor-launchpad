import { Building2, Shield, TrendingUp, Users, FileCheck, Sparkles } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Everything founders need to grow their business</h2>
                    <p className="text-muted-foreground">Hubvestor connects you with investors, patenting services, insurance providers, and banking solutions—all in one platform designed for SMB success.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Investor Matching</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Connect with qualified investors who align with your business vision and growth goals.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FileCheck className="size-4" />
                            <h3 className="text-sm font-medium">Patent Support</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Protect your innovations with streamlined access to patent filing and IP services.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">Business Insurance</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Get comprehensive coverage from trusted insurance partners for your growing business.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Building2 className="size-4" />
                            <h3 className="text-sm font-medium">Banking Solutions</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Access business banking services tailored for startups and small businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="size-4" />
                            <h3 className="text-sm font-medium">Growth Analytics</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Track your fundraising progress and business metrics in one dashboard.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Expert Guidance</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Get personalized support from advisors who understand SMB challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
