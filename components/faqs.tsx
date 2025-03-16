export default function FAQs() {
    return (
        <section id="faq" className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400">Common questions about our AI automation services</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">What types of processes can be automated with AI?</h3>
                            <p className="text-muted-foreground mt-4">Our AI automation solutions can handle a wide range of business processes, including:</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-muted-foreground mt-4">Data entry and processing tasks</li>
                                <li className="text-muted-foreground mt-4">Customer service interactions</li>
                                <li className="text-muted-foreground mt-4">Document analysis and information extraction</li>
                                <li className="text-muted-foreground mt-4">Scheduling and appointment management</li>
                                <li className="text-muted-foreground mt-4">Inventory management and forecasting</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How long does it take to implement an AI automation solution?</h3>
                            <p className="text-muted-foreground mt-4">Implementation timelines vary based on the complexity of your processes. Simple automations can be deployed in as little as 2-4 weeks, while more complex enterprise solutions may take 2-3 months. During our discovery call, we'll provide a more accurate timeline for your specific needs.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Do I need technical expertise to use your AI automation tools?</h3>
                            <p className="text-muted-foreground my-4">No, our solutions are designed with user-friendliness in mind. While we handle the technical implementation, we provide:</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">Intuitive dashboards for monitoring automation performance</li>
                                <li className="text-muted-foreground">Comprehensive training for your team</li>
                                <li className="text-muted-foreground">Ongoing support and maintenance</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What ROI can I expect from implementing AI automation?</h3>
                            <p className="text-muted-foreground mt-4">Most clients see a positive ROI within 3-6 months of implementation. Our solutions typically deliver 40-60% reduction in process time, 70-90% reduction in errors, and 30-50% cost savings compared to manual processes. We'll work with you to establish clear metrics for measuring success.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do you ensure data security and privacy?</h3>
                            <p className="text-muted-foreground mt-4">We implement industry-leading security measures including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with regulations like GDPR and CCPA. All client data is handled according to strict confidentiality protocols.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
