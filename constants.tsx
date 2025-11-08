import React, { useState } from 'react';

// Modal Content
export type ModalId = 'about' | 'contact' | 'guide' | 'privacy' | 'tos' | 'dmca';

// FIX: Changed JSX.Element to React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
export const MODAL_CONTENT: Record<ModalId, { title: string; content: React.ReactNode }> = {
  about: {
    title: 'About This Tool',
    content: (
      <div>
        <p>This Advanced UUID/GUID Generator is a high-performance, client-side tool designed for developers, testers, and anyone in need of universally unique identifiers. Built with modern web technologies, it provides a seamless and secure experience directly in your browser.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li><strong>Secure Generation:</strong> Utilizes the browser's native <code>crypto.getRandomValues()</code> API for cryptographically secure random number generation.</li>
          <li><strong>Instant Performance:</strong> All operations are performed on the client-side, meaning zero latency and no server interaction.</li>
          <li><strong>Bulk Generation:</strong> Create up to 100 unique UUIDs at once for testing or database seeding.</li>
          <li><strong>Sleek Interface:</strong> A modern, responsive, and aesthetically pleasing dark theme makes the tool a joy to use.</li>
        </ul>
        <p>This project is proudly developed and maintained by HSINI MOHAMED. For more developer tools and projects, visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer">doodax.com</a>.</p>
      </div>
    ),
  },
  contact: {
    title: 'Contact Us',
    content: (
      <div>
        <p>For any inquiries, feedback, or bug reports, please feel free to reach out.</p>
        <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a></p>
        <p><strong>GitHub:</strong> You can also open an issue or connect on my <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer">GitHub profile</a>.</p>
      </div>
    ),
  },
  guide: {
    title: 'How to Use the Generator',
    content: (
       <div>
        <p>Using the UUID/GUID Generator is straightforward:</p>
        <ol>
          <li><strong>Single UUID:</strong> The page automatically generates a new Version 4 UUID for you on load. To get a new one, simply click the "Generate New UUID" button.</li>
          <li><strong>Copying a Single UUID:</strong> Click the copy icon next to the displayed UUID. You will see a confirmation checkmark when it's successfully copied to your clipboard.</li>
          <li><strong>Bulk Generation:</strong>
            <ul>
                <li>Enter the desired number of UUIDs (from 1 to 100) in the input field.</li>
                <li>Click the "Generate" button.</li>
                <li>A list of unique UUIDs will appear in the text area below.</li>
            </ul>
          </li>
          <li><strong>Copying Bulk UUIDs:</strong> Click the copy icon at the top-right of the text area to copy the entire list, with each UUID on a new line.</li>
        </ol>
      </div>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    content: (
      <div>
        <p>We take your privacy seriously. This tool operates entirely on the client-side, within your web browser. No data, including the generated UUIDs, is ever sent to or stored on our servers. Your activity is completely private and ephemeral.</p>
      </div>
    ),
  },
  tos: {
    title: 'Terms of Service',
    content: (
      <div>
        <p>This UUID/GUID Generator is provided as a free tool for personal and commercial use. By using this service, you agree not to hold the creators liable for any damages. The tool is provided "as is" without any warranty.</p>
      </div>
    ),
  },
  dmca: {
    title: 'DMCA Policy',
    content: (
      <div>
        <p>All content on this website is original. If you believe any content infringes on your copyright, please contact us at <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a> with a valid DMCA complaint.</p>
      </div>
    ),
  },
};

// FAQ Component for the Article
const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-4">
        <button
            className="w-full flex justify-between items-center text-left"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h3 className="text-lg font-semibold my-0">{question}</h3>
            <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
        </button>
        {isOpen && <div className="mt-4 prose-p:my-2">{children}</div>}
        </div>
    );
};

// SEO Article Content Component
export const ArticleContent: React.FC = () => {
    return (
        <>
            <h2 id="intro" className="text-4xl font-bold mb-4">The Ultimate Guide to UUIDs: From Generation Logic to Practical Application</h2>
            <p className="lead text-xl text-gray-400">Welcome to a comprehensive deep-dive into the world of Universally Unique Identifiers (UUIDs). Whether you're a seasoned developer architecting a distributed system or a curious newcomer wondering what that long string of characters means, this guide will illuminate the flow, logic, and strategies behind UUIDs and demonstrate the power of our Advanced UUID/GUID Generator.</p>
            
            <nav id="toc" className="my-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-semibold mt-0">Table of Contents</h3>
                <ul className="list-none pl-0">
                    <li><a href="#what-is-uuid">1. What Exactly is a UUID?</a></li>
                    <li><a href="#anatomy">2. The Anatomy of a UUID</a></li>
                    <li><a href="#versions">3. Understanding UUID Versions</a></li>
                    <li><a href="#why-v4">4. Why Version 4 is the Gold Standard for Randomness</a></li>
                    <li><a href="#generation-logic">5. The Core Logic: How Our Generator Crafts a v4 UUID</a></li>
                    <li><a href="#use-cases">6. Strategic Use Cases for UUIDs</a></li>
                    <li><a href="#best-practices">7. Best Practices and Potential Pitfalls</a></li>
                    <li><a href="#faq">8. Frequently Asked Questions (FAQ)</a></li>
                </ul>
            </nav>

            <section id="what-is-uuid">
                <h2 className="text-3xl font-bold">1. What Exactly is a UUID?</h2>
                <p>A Universally Unique Identifier (UUID) is a 128-bit number used to identify information in computer systems. The term Globally Unique Identifier (GUID) is also used, typically in the context of Microsoft technologies, but it refers to the same concept. The primary purpose of a UUID is to enable distributed systems to uniquely identify information without significant central coordination.</p>
                <p>Think of it as a digital fingerprint for a piece of data. While two people in the world might share the same name, the probability of two people having the same fingerprint is infinitesimally small. Similarly, the chance of two different systems independently generating the same UUID is, for all practical purposes, zero. This property is what makes them so invaluable in modern computing.</p>
                <p>This tool you're using specializes in generating Version 4 UUIDs, which are based on pure randomness, making them ideal for a vast array of applications where unpredictability and uniqueness are paramount.</p>
            </section>
            
            <section id="anatomy">
                <h2 className="text-3xl font-bold">2. The Anatomy of a UUID</h2>
                <p>A UUID is typically represented as a 32-character hexadecimal string, separated by hyphens into five groups, like this: <code>123e4567-e89b-12d3-a456-426614174000</code>. This standard format, defined in RFC 4122, isn't just for readability; it encodes specific information within its structure.</p>
                <p>The structure is 8-4-4-4-12, totaling 32 hexadecimal digits, which represent the 128 bits (32 digits * 4 bits/digit = 128 bits).</p>
                <p>Let's break down the key parts:</p>
                <ul>
                    <li><strong>Version Number:</strong> The first digit of the third group (e.g., the '1' in <code>...-12d3-...</code>) indicates the UUID version. For Version 4, this digit is always '4'. This is a crucial marker that tells any system how the UUID was generated.</li>
                    <li><strong>Variant Field:</strong> The first digit of the fourth group (e.g., the 'a' in <code>...-a456-...</code>) specifies the variant, which defines the layout of the UUID. For modern UUIDs compliant with RFC 4122, this digit will be 8, 9, A, or B.</li>
                    <li><strong>Random Bits:</strong> In a Version 4 UUID, all other bits (122 of them) are generated from a cryptographically secure random or pseudo-random source. This massive amount of randomness is the source of its uniqueness.</li>
                </ul>
            </section>
            
            <section id="versions">
                <h2 className="text-3xl font-bold">3. Understanding UUID Versions</h2>
                <p>While our generator focuses on Version 4, it's essential to understand that other versions exist, each with a different generation strategy. Knowing the versions helps you choose the right tool for the job.</p>
                <table className="w-full my-4">
                    <thead>
                        <tr>
                            <th>Version</th>
                            <th>Generation Method</th>
                            <th>Key Characteristic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Version 1</td>
                            <td>Timestamp + MAC Address</td>
                            <td>Guaranteed uniqueness for a single source; potentially exposes creation time and machine ID.</td>
                        </tr>
                        <tr>
                            <td>Version 2</td>
                            <td>Timestamp + MAC Address (DCE Security)</td>
                            <td>Rarely used; an extension of v1 with more specific semantics.</td>
                        </tr>
                        <tr>
                            <td>Version 3</td>
                            <td>MD5 Hash of a namespace and name</td>
                            <td>Deterministic; same inputs always produce the same UUID.</td>
                        </tr>
                        <tr>
                            <td><strong>Version 4</strong></td>
                            <td><strong>Random/Pseudo-random Numbers</strong></td>
                            <td><strong>Highest degree of randomness and unpredictability. No identifiable information.</strong></td>
                        </tr>
                        <tr>
                            <td>Version 5</td>
                            <td>SHA-1 Hash of a namespace and name</td>
                            <td>Deterministic like v3, but uses a more secure hashing algorithm.</td>
                        </tr>
                    </tbody>
                </table>
                <p>Versions 1 and 2 can leak information (MAC address, timestamp), making them unsuitable for security-sensitive contexts. Versions 3 and 5 are useful when you need a reproducible identifier from a given input, like generating a consistent ID for a user based on their email address. But for general-purpose unique IDs, Version 4 is the undisputed champion.</p>
            </section>

            <section id="why-v4">
                <h2 className="text-3xl font-bold">4. Why Version 4 is the Gold Standard for Randomness</h2>
                <p>The primary advantage of Version 4 UUIDs is their simplicity and robust uniqueness, derived from pure chance. They don't depend on a machine's network card (like v1), the time of day, or any predictable input. This makes them perfect for:</p>
                <ul>
                    <li><strong>Distributed Systems:</strong> Multiple servers can generate IDs independently without any fear of collision. This is the cornerstone of microservices architecture and large-scale databases.</li>
                    <li><strong>Security:</strong> Because they are not sequential or guessable, v4 UUIDs are excellent for creating unguessable URLs, session identifiers, and API keys. An attacker can't predict the next valid ID.</li>
                    <li><strong>Privacy:</strong> They contain no identifiable information about the machine, user, or time of creation, preserving privacy.</li>
                </ul>
                <p>The sheer scale of a 122-bit random number is difficult to comprehend. The total number of possible v4 UUIDs is 2<sup>122</sup>, which is approximately 5.3 undecillion (5.3 x 10<sup>36</sup>). To put that into perspective, you would need to generate one billion UUIDs per second for over 100 years to have even a tiny, remote chance of a single collision. For all practical intents and purposes, they are unique forever.</p>
            </section>

            <section id="generation-logic">
                <h2 className="text-3xl font-bold">5. The Core Logic: How Our Generator Crafts a v4 UUID</h2>
                <p>Our Advanced UUID/GUID Generator doesn't rely on complex server-side logic. It harnesses the power of your browser's built-in cryptographic functions to ensure security and speed. Here's the step-by-step flow:</p>
                <ol>
                    <li><strong>Template Creation:</strong> We start with the standard UUID template: <code>xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx</code>. The 'x's are placeholders for random hex digits, the '4' is fixed to specify Version 4, and the 'y' is a placeholder for the variant digit.</li>
                    <li><strong>Secure Randomness:</strong> The core of the process is the <code>crypto.getRandomValues()</code> method. This is a JavaScript API that provides access to the operating system's cryptographically secure pseudo-random number generator (CSPRNG). Unlike a simple <code>Math.random()</code>, a CSPRNG is designed to be unpredictable and suitable for security-sensitive tasks.</li>
                    <li><strong>Filling the Blanks:</strong> We iterate through the template. For each 'x' or 'y' placeholder, we generate a random 4-bit number (a value from 0 to 15).</li>
                    <li><strong>Setting the Variant:</strong> For the 'y' placeholder, we perform a bitwise operation to ensure it conforms to the RFC 4122 variant (it must be 8, 9, A, or B). The logic <code>(r & 0x3 | 0x8)</code> elegantly achieves this, constraining the first two bits to '10' as required.</li>
                    <li><strong>Hex Conversion:</strong> Each generated number is converted to its hexadecimal string representation (e.g., 10 becomes 'a', 15 becomes 'f').</li>
                    <li><strong>Final Assembly:</strong> The hexadecimal digits replace the placeholders, and the final, valid Version 4 UUID is constructed and presented to you.</li>
                </ol>
                <p>This entire process happens in a fraction of a millisecond, directly on your machine, ensuring both privacy and instantaneous results.</p>
            </section>

            <section id="use-cases">
                <h2 className="text-3xl font-bold">6. Strategic Use Cases for UUIDs</h2>
                <p>The application of UUIDs extends across the entire software development lifecycle. Here are some key strategic implementations:</p>
                <ul>
                    <li><strong>Database Primary Keys:</strong> In distributed databases (like CockroachDB or multi-master setups), using auto-incrementing integers as primary keys is a recipe for disaster (key collisions). UUIDs solve this elegantly, allowing any node to create a new record with a unique key.</li>
                    <li><strong>Transaction IDs:</strong> In logging and monitoring systems, assigning a unique UUID to each incoming request allows you to trace its journey across multiple microservices. This is invaluable for debugging complex, asynchronous workflows.</li>
                    <li><strong>User Session Identifiers:</strong> Storing a UUID in a user's cookie or token provides a secure, unguessable identifier for their session.</li>
                    <li><strong>File Naming:</strong> When handling user-uploaded content, naming files with UUIDs prevents naming conflicts and obscures the original filename for security.</li>
                    <li><strong>Idempotency Keys:</strong> In API design, a client can send a UUID as an idempotency key. If the server receives the same key twice due to a network retry, it knows to process the request only once, preventing duplicate actions (like charging a credit card twice).</li>
                </ul>
            </section>
            
            <section id="best-practices">
                <h2 className="text-3xl font-bold">7. Best Practices and Potential Pitfalls</h2>
                <p>While powerful, using UUIDs effectively requires some consideration.</p>
                <p><strong>Do:</strong></p>
                <ul>
                    <li><strong>Store as a Native Type:</strong> Most modern databases (like PostgreSQL, SQL Server) have a native UUID or GUID data type. Use it. It's more efficient for storage and indexing than a plain string (VARCHAR).</li>
                    <li><strong>Use Version 4 for General Uniqueness:</strong> When you just need a unique ID, v4 is almost always the right choice.</li>
                    <li><strong>Consider Performance:</strong> Be aware that UUIDs, being random, can lead to database index fragmentation and slightly slower write performance compared to sequential keys. For very high-throughput systems, some databases offer solutions like "time-ordered" UUIDs (like v6/v7, a newer standard) that combine the benefits of timestamps and randomness.</li>
                </ul>
                <p><strong>Don't:</strong></p>
                <ul>
                    <li><strong>Use UUIDs in URLs for SEO:</strong> Search engines prefer human-readable URLs (e.g., <code>/products/blue-widget</code>) over <code>/products/123e4567-...</code>. Use UUIDs for identification, not for user-facing slugs.</li>
                    <li><strong>Assume They Are Always Opaque:</strong> While v4 is random, a v1 UUID can reveal the MAC address of the generating machine. Always know which version you are dealing with.</li>
                    <li><strong>Generate Them with Weak Randomness:</strong> Never use a non-secure random number generator like <code>Math.random()</code> for security-critical identifiers. Stick to cryptographic sources like the one this tool uses.</li>
                </ul>
            </section>

            <section id="faq">
                <h2 className="text-3xl font-bold">8. Frequently Asked Questions (FAQ)</h2>
                <FaqItem question="What is a Version 4 UUID?">
                    <p>A Version 4 UUID is a universally unique identifier that is generated using random or pseudo-random numbers. Its format is defined by RFC 4122. The randomness makes it virtually impossible for two identical v4 UUIDs to be generated independently.</p>
                </FaqItem>
                <FaqItem question="Are UUIDs generated by this tool truly unique?">
                    <p>The probability of a collision (generating the same UUID twice) with Version 4 UUIDs is astronomically low. With 122 bits of randomness, you would need to generate one billion UUIDs per second for about 85 years to have a 50% chance of a single collision. For all practical purposes, they are unique.</p>
                </FaqItem>
                <FaqItem question="Is this UUID generator secure?">
                    <p>Yes. This tool uses the browser's built-in <code>crypto.getRandomValues()</code> API, which is a cryptographically secure pseudo-random number generator (CSPRNG). This is the standard and most secure way to generate random data on the client-side.</p>
                </FaqItem>
                <FaqItem question="What is the difference between a UUID and a GUID?">
                    <p>Functionally, they are the same. GUID (Globally Unique Identifier) is Microsoft's implementation of the UUID standard. While there are minor historical differences in how some bits were interpreted, today the terms are used interchangeably.</p>
                </FaqItem>
                <FaqItem question="Can I use these generated UUIDs in my database as primary keys?">
                    <p>Absolutely. Using UUIDs as primary keys is a common practice, especially in distributed systems, as it avoids collisions when merging data from different sources. However, be aware of potential database indexing performance implications compared to sequential integer keys. Some databases struggle with the randomness of v4 UUIDs leading to index fragmentation. Newer UUID versions (like v7) are being developed to combat this by combining a timestamp with randomness.</p>
                </FaqItem>
            </section>
        </>
    );
};
