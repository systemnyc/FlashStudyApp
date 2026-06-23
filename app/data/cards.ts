export type Card = {
  id: number;
  term: string;
  answer: string;
  category: string;
};

export const cards: Card[] = [
  {
    id: 1,
    term: "Pythagorean Theorem",
    answer: "a² + b² = c²",
    category: "Math",
  },
  {
    id: 2,
    term: "Mitochondria",
    answer: "The powerhouse of the cell",
    category: "Biology",
  },
  {
    id: 3,
    term: "React Component",
    answer: "A reusable UI element",
    category: "Programming",
  },
  {
    "id": 1,
    "term": "Develop Project Charter",
    "answer": "The process of developing a document to formally authorize a project or a phase, outline objectives, and define the project manager's authority level.",
    "category": "Project Integration Management"
  },
  {
    "id": 2,
    "term": "Business Case",
    "answer": "Necessary business document information that determines whether or not a project is worth the required investment based on market demand, customer requests, or organizational need.",
    "category": "Project Integration Management"
  },
  {
    "id": 3,
    "term": "Assumption Log",
    "answer": "An output list of things that you perceive to be true (assumptions) and things that might constrain the project.",
    "category": "Project Integration Management"
  },
  {
    "id": 4,
    "term": "Identify Stakeholders",
    "answer": "The process of identifying project stakeholders regularly, and analyzing and recording relevant information regarding their interests, involvement, and impact.",
    "category": "Project Stakeholder Management"
  },
  {
    "id": 5,
    "term": "Stakeholder Analysis",
    "answer": "A tool used to analyze who your stakeholders are, how they feel about the project, their power authority, and how the project will affect them.",
    "category": "Project Stakeholder Management"
  },
  {
    "id": 6,
    "term": "Develop Project Management Plan",
    "answer": "The process of defining, preparing, and coordinating all plan components and consolidating them into an integrated, comprehensive document that outlines how the work will be performed.",
    "category": "Project Integration Management"
  },
  {
    "id": 7,
    "term": "Product Scope vs. Project Scope",
    "answer": "Product Scope refers to the features and functions that characterize a product, service, or result. Project Scope is the work needed to deliver that product, service, or result.",
    "category": "Project Scope Management"
  },
  {
    "id": 8,
    "term": "Gold Plating",
    "answer": "The practice of doing extra work or adding features that are not included in the approved project scope.",
    "category": "Project Scope Management"
  },
  {
    "id": 9,
    "term": "Scope Creep",
    "answer": "The addition of unauthorized or unapproved work to the project scope.",
    "category": "Project Scope Management"
  },
  {
    "id": 10,
    "term": "Collect Requirements",
    "answer": "The process of determining, documenting, and managing stakeholder needs and requirements to meet project objectives.",
    "category": "Project Scope Management"
  },
  {
    "id": 11,
    "term": "Requirements Traceability Matrix",
    "answer": "A table that links project requirements back to their original source to track ownership, purpose, and completion status throughout the project scope.",
    "category": "Project Scope Management"
  },
  {
    "id": 12,
    "term": "Define Scope",
    "answer": "The process of developing a detailed description of the project and product by building upon major deliverables, assumptions, and constraints.",
    "category": "Project Scope Management"
  },
  {
    "id": 13,
    "term": "Create WBS",
    "answer": "The process of subdividing project deliverables and project work into smaller, more manageable components through decomposition.",
    "category": "Project Scope Management"
  },
  {
    "id": 14,
    "term": "Schedule Compression",
    "answer": "Techniques used to shorten the schedule duration. Includes Crashing (adding resources, which adds cost) and Fast Tracking (performing activities in parallel, which adds risk).",
    "category": "Project Schedule Management"
  },
  {
    "id": 15,
    "term": "Determine Budget",
    "answer": "The process of aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline.",
    "category": "Project Cost Management"
  },
  {
    "id": 16,
    "term": "Plan Quality Management",
    "answer": "The process of identifying quality requirements and/or standards for the project and its deliverables, and documenting how the project will demonstrate compliance.",
    "category": "Project Quality Management"
  },
  {
    "id": 17,
    "term": "Individual vs. Overall Project Risk",
    "answer": "Individual risk is an uncertain event with positive or negative impacts on project parts. Overall risk is the risk exposure of the project as a whole, comprising individual risks and other uncertainty.",
    "category": "Project Risk Management"
  },
  {
    "id": 18,
    "term": "Direct and Manage Project Work",
    "answer": "The process of performing the work defined in the project management plan, managing people, requesting changes, and implementing approved changes.",
    "category": "Project Integration Management"
  },
  {
    "id": 19,
    "term": "Manage Project Knowledge",
    "answer": "The process of using existing knowledge and creating new knowledge to achieve the project's objectives and contribute to organizational learning.",
    "category": "Project Integration Management"
  },
  {
    "id": 20,
    "term": "Perform Integrated Change Control",
    "answer": "The formal 7-step process for reviewing, assessing, and either approving or rejecting change requests via the Change Control Board (CCB).",
    "category": "Project Integration Management"
  },
  {
    "id": 21,
    "term": "Monitor and Control Project Work",
    "answer": "The process of tracking, reviewing, and reporting overall project progress to meet the performance objectives defined in the project management plan.",
    "category": "Project Integration Management"
  },
  {
    "id": 22,
    "term": "Work Performance Data",
    "answer": "The raw observations and measurements identified during activities being performed to carry out the project work (e.g., actual costs, duration estimates, percent complete).",
    "category": "Project Integration Management"
  },
  {
    "id": 23,
    "term": "Work Performance Information",
    "answer": "The performance data collected from various controlling processes, analyzed in context, and integrated based on relationships across areas.",
    "category": "Project Integration Management"
  },
  {
    "id": 24,
    "term": "Work Performance Reports",
    "answer": "The physical or electronic representation of work performance information compiled in project documents, intended to generate decisions, actions, or awareness.",
    "category": "Project Integration Management"
  },
  {
    "id": 25,
    "term": "Corrective Action",
    "answer": "An intentional activity that realigns the performance of the project work with the project management plan.",
    "category": "Project Integration Management"
  },
  {
    "id": 26,
    "term": "Preventive Action",
    "answer": "An intentional activity that ensures the future performance of the project work is aligned with the project management plan.",
    "category": "Project Integration Management"
  },
  {
    "id": 27,
    "term": "Defect Repair",
    "answer": "An intentional activity to modify a nonconforming product or product component.",
    "category": "Project Integration Management"
  },
  {
    "id": 28,
    "term": "Change Control Board (CCB)",
    "answer": "A formally chartered group responsible for reviewing, evaluating, approving, deferring, or rejecting changes to the project, and for recording and communicating such decisions.",
    "category": "Project Integration Management"
  },
  {
    "id": 29,
    "term": "Close Project or Phase",
    "answer": "The process of finalizing all activities across all of the Project Management Process Groups to formally complete a project, phase, or contract.",
    "category": "Project Integration Management"
  },
  {
    "id": 30,
    "term": "Validate Scope",
    "answer": "The process of formalizing acceptance of the completed project deliverables by the customer or sponsor.",
    "category": "Project Scope Management"
  },
  {
    "id": 31,
    "term": "Control Scope",
    "answer": "The process of monitoring the status of the project and product scope and managing changes to the scope baseline.",
    "category": "Project Scope Management"
  },
  {
    "id": 32,
    "term": "Variance Analysis",
    "answer": "A technique for determining the cause and degree of difference between the baseline performance and actual performance metrics.",
    "category": "Project Scope Management"
  },
  {
    "id": 33,
    "term": "Trend Analysis",
    "answer": "An analytical technique that uses mathematical models to forecast future outcomes based on historical results and performance over time.",
    "category": "Project Scope Management"
  },
  {
    "id": 34,
    "term": "Plan Schedule Management",
    "answer": "The process of establishing the policies, procedures, and documentation for planning, developing, managing, executing, and controlling the project schedule.",
    "category": "Project Schedule Management"
  },
  {
    "id": 35,
    "term": "Define Activities",
    "answer": "The process of identifying and documenting the specific actions to be performed to produce the project deliverables.",
    "category": "Project Schedule Management"
  },
  {
    "id": 36,
    "term": "Activity Attributes",
    "answer": "Multiple attributes associated with each schedule activity that can be included within the activity list (e.g., activity codes, predecessor/successor relationships, resource requirements).",
    "category": "Project Schedule Management"
  },
  {
    "id": 37,
    "term": "Milestone List",
    "answer": "A project document that identifies all project milestones and indicates whether the milestone is mandatory (required by contract) or optional.",
    "category": "Project Schedule Management"
  },
  {
    "id": 38,
    "term": "Sequence Activities",
    "answer": "The process of identifying and documenting relationships among the project activities to define the logical sequence of work.",
    "category": "Project Schedule Management"
  },
  {
    "id": 39,
    "term": "Precedence Diagramming Method (PDM)",
    "answer": "A technique used for constructing a schedule model in which activities are represented by nodes and are graphically linked by one or more logical relationships.",
    "category": "Project Schedule Management"
  },
  {
    "id": 40,
    "term": "Dependency Determination",
    "answer": "The classification of dependencies as either Mandatory (hard logic), Discretionary (preferred/soft logic), External, or Internal.",
    "category": "Project Schedule Management"
  },
  {
    "id": 41,
    "term": "Lead",
    "answer": "The amount of time a successor activity can be advanced with respect to a predecessor activity (e.g., starting work on a second task before the first is completely finished).",
    "category": "Project Schedule Management"
  },
  {
    "id": 42,
    "term": "Lag",
    "answer": "The amount of time a successor activity will be delayed with respect to a predecessor activity (e.g., waiting 3 days for concrete to dry before building walls).",
    "category": "Project Schedule Management"
  },
  {
    "id": 43,
    "term": "Estimate Activity Durations",
    "answer": "The process of estimating the number of work periods needed to complete individual activities with estimated resources.",
    "category": "Project Schedule Management"
  },
  {
    "id": 44,
    "term": "Analogous Estimating",
    "answer": "An estimating technique that uses historical data from a similar past activity or project as the basis for estimating the duration or cost of a current activity or project.",
    "category": "Project Schedule Management"
  },
  {
    "id": 45,
    "term": "Parametric Estimating",
    "answer": "An estimating technique in which an algorithm or a statistical relationship is used to calculate cost or duration based on historical data and project parameters (e.g., hours per square foot).",
    "category": "Project Schedule Management"
  },
  {
    "id": 46,
    "term": "Three-Point Estimating",
    "answer": "An estimating technique that improves accuracy by considering estimation uncertainty and risk, using Most Likely (M), Optimistic (O), and Pessimistic (P) values.",
    "category": "Project Schedule Management"
  },
  {
    "id": 47,
    "term": "Bottom-Up Estimating",
    "answer": "A method of estimating project duration or cost by aggregating the estimates of the lower-level components of the work breakdown structure (WBS).",
    "category": "Project Schedule Management"
  },
  {
    "id": 48,
    "term": "Develop Schedule",
    "answer": "The process of analyzing activity sequences, durations, resource requirements, and schedule constraints to create the schedule model for project execution, monitoring, and controlling.",
    "category": "Project Schedule Management"
  },
  {
    "id": 49,
    "term": "Critical Path Method (CPM)",
    "answer": "A method used to estimate the minimum project duration and determine the amount of schedule flexibility (float) on the logical network paths within the schedule model.",
    "category": "Project Schedule Management"
  },
  {
    "id": 50,
    "term": "Total Float vs. Free Float",
    "answer": "Total Float is the amount of time an activity can be delayed without delaying the project finish date. Free Float is the amount of time an activity can be delayed without delaying its immediate successor.",
    "category": "Project Schedule Management"
  },
  {
    "id": 51,
    "term": "Resource Optimization",
    "answer": "Techniques used to adjust activity start and finish dates to match resource availability. Includes Resource Leveling (can change critical path/delay project) and Resource Smoothing (cannot delay project).",
    "category": "Project Schedule Management"
  },
  {
    "id": 52,
    "term": "Control Schedule",
    "answer": "The process of monitoring the status of the project to update the project schedule and managing changes to the schedule baseline.",
    "category": "Project Schedule Management"
  },
  {
    "id": 53,
    "term": "Plan Cost Management",
    "answer": "The process of defining how the project costs will be estimated, budgeted, managed, monitored, and controlled throughout the project lifecycle.",
    "category": "Project Cost Management"
  },
  {
    "id": 54,
    "term": "Estimate Costs",
    "answer": "The process of developing an approximation of the monetary resources needed to complete project work packages and activities.",
    "category": "Project Cost Management"
  },
  {
    "id": 55,
    "term": "Cost Baseline",
    "answer": "The approved version of the time-phased project budget, excluding any management reserves, which can only be changed through formal change control procedures.",
    "category": "Project Cost Management"
  },
  {
    "id": 56,
    "term": "Contingency Reserves",
    "answer": "Budget allocations within the cost baseline established for identified risks ('known-unknowns') that are accepted and managed with active response strategies.",
    "category": "Project Cost Management"
  },
  {
    "id": 57,
    "term": "Management Reserves",
    "answer": "An amount of the project budget withheld outside the cost baseline for management control purposes, reserved for unforeseen work that falls within scope ('unknown-unknowns').",
    "category": "Project Cost Management"
  },
  {
    "id": 58,
    "term": "Control Costs",
    "answer": "The process of monitoring the status of the project to update the project costs and managing changes to the cost baseline.",
    "category": "Project Cost Management"
  },
  {
    "id": 59,
    "term": "Earned Value Management (EVM)",
    "answer": "A methodology that combines scope, schedule, and resource measurements to assess project performance and progress relative to a baseline.",
    "category": "Project Cost Management"
  },
  {
    "id": 60,
    "term": "Planned Value (PV)",
    "answer": "The authorized budget assigned to scheduled work components to be accomplished by a specific point in time.",
    "category": "Project Cost Management"
  },
  {
    "id": 61,
    "term": "Actual Cost (AC)",
    "answer": "The realized cost incurred for the work performed on an activity during a specific time period.",
    "category": "Project Cost Management"
  },
  {
    "id": 62,
    "term": "Earned Value (EV)",
    "answer": "The measure of work performed expressed in terms of the budget authorized for that work.",
    "category": "Project Cost Management"
  },
  {
    "id": 63,
    "term": "Cost Variance (CV)",
    "answer": "The amount of budget deficit or surplus at a given point in time, expressed as the difference between earned value and actual cost (Formula: EV - AC).",
    "category": "Project Cost Management"
  },
  {
    "id": 64,
    "term": "Schedule Variance (SV)",
    "answer": "The measure of schedule performance expressed as the difference between the earned value and the planned value (Formula: EV - PV).",
    "category": "Project Cost Management"
  },
  {
    "id": 65,
    "term": "Cost Performance Index (CPI)",
    "answer": "A measure of the cost efficiency of budgeted resources, expressed as the ratio of earned value to actual cost (Formula: EV / AC). A value worth 1.0 or greater is favorable.",
    "category": "Project Cost Management"
  },
  {
    "id": 66,
    "term": "Schedule Performance Index (SPI)",
    "answer": "A measure of schedule efficiency expressed as the ratio of earned value to planned value (Formula: EV / PV). A value worth 1.0 or greater is favorable.",
    "category": "Project Cost Management"
  },
  {
    "id": 67,
    "term": "Budget at Completion (BAC)",
    "answer": "The sum of all budgets established for the work to be performed on a project.",
    "category": "Project Cost Management"
  },
  {
    "id": 68,
    "term": "Estimate at Completion (EAC)",
    "answer": "The expected total cost of completing all work expressed as the sum of the actual cost to date and the estimate to complete.",
    "category": "Project Cost Management"
  },
  {
    "id": 69,
    "term": "Estimate to Complete (ETC)",
    "answer": "The expected cost needed to finish all the remaining project work.",
    "category": "Project Cost Management"
  },
  {
    "id": 70,
    "term": "To-Complete Performance Index (TCPI)",
    "answer": "The calculated projection of cost performance that must be achieved on the remaining work to meet a specified management goal, such as the BAC or EAC.",
    "category": "Project Cost Management"
  },
  {
    "id": 71,
    "term": "Quality vs. Grade",
    "answer": "Quality is the degree to which a set of inherent characteristics fulfills requirements. Grade is a category or rank used to distinguish items that have the same functional use but different technical characteristics.",
    "category": "Project Quality Management"
  },
  {
    "id": 72,
    "term": "Prevention vs. Inspection",
    "answer": "Prevention keeps errors out of the process, whereas inspection keeps errors out of the hands of the customer.",
    "category": "Project Quality Management"
  },
  {
    "id": 73,
    "term": "Attribute Sampling vs. Variables Sampling",
    "answer": "Attribute sampling measures whether a result conforms or does not conform (yes/no). Variables sampling measures the degree of conformity on a continuous scale.",
    "category": "Project Quality Management"
  },
  {
    "id": 74,
    "term": "Cost of Quality (COQ)",
    "answer": "All costs incurred over the life of the product by investing in preventing nonconformance to requirements, appraising the product or service for conformance, and failing to meet requirements.",
    "category": "Project Quality Management"
  },
  {
    "id": 75,
    "term": "Cost of Conformance",
    "answer": "Money spent during the project to avoid failures. Includes Prevention Costs (training, equipment, documentation) and Appraisal Costs (testing, inspections, destructive testing loss).",
    "category": "Project Quality Management"
  },
  {
    "id": 76,
    "term": "Cost of Nonconformance",
    "answer": "Money spent during and after the project because of failures. Includes Internal Failure Costs (rework, scrap) and External Failure Costs (liabilities, warranty work, lost business).",
    "category": "Project Quality Management"
  },
  {
    "id": 77,
    "term": "Manage Quality",
    "answer": "The process of translating the quality management plan into executable quality activities that incorporate the organization's quality policies into the project.",
    "category": "Project Quality Management"
  },
  {
    "id": 78,
    "term": "Quality Audit",
    "answer": "A structured, independent process to determine if project activities comply with organizational and project policies, processes, and procedures.",
    "category": "Project Quality Management"
  },
  {
    "id": 79,
    "term": "Design for X (DfX)",
    "answer": "A set of technical guidelines that may be applied during the design of a product to optimize a specific aspect of the design, such as reliability, deployment, assembly, or cost.",
    "category": "Project Quality Management"
  },
  {
    "id": 80,
    "term": "Control Quality",
    "answer": "The process of monitoring and recording results of executing the quality management activities to assess performance and ensure the project outputs are complete, correct, and meet customer expectations.",
    "category": "Project Quality Management"
  },
  {
    "id": 81,
    "term": "Checksheets",
    "answer": "Also known as tally sheets, these are used to organize data facts in real time to gather info about defects or quality problems efficiently.",
    "category": "Project Quality Management"
  },
  {
    "id": 82,
    "term": "Statistical Sampling",
    "answer": "Choosing a part of a population for inspection instead of checking the entire population to save time and money.",
    "category": "Project Quality Management"
  },
  {
    "id": 83,
    "term": "Plan Resource Management",
    "answer": "The process of defining how to estimate, acquire, manage, and use team and physical resources.",
    "category": "Project Resource Management"
  },
  {
    "id": 84,
    "term": "Responsibility Assignment Matrix (RAM)",
    "answer": "A grid that shows the project resources assigned to each work package, commonly displayed as a RACI chart (Responsible, Accountable, Consulted, Informed).",
    "category": "Project Resource Management"
  },
  {
    "id": 85,
    "term": "Resource Management Plan",
    "answer": "A component of the project management plan that provides guidance on how project resources should be categorized, allocated, managed, and released.",
    "category": "Project Resource Management"
  },
  {
    "id": 86,
    "term": "Team Charter",
    "answer": "A document that establishes the team values, agreements, and operational guidelines for the project team to set clear expectations.",
    "category": "Project Resource Management"
  },
  {
    "id": 87,
    "term": "Estimate Activity Resources",
    "answer": "The process of estimating the team resources and the type and quantities of materials, equipment, and supplies necessary to perform project work.",
    "category": "Project Resource Management"
  },
  {
    "id": 88,
    "term": "Resource Breakdown Structure (RBS)",
    "answer": "A hierarchical representation of resources by category and type used for planning and tracking resource allocation.",
    "category": "Project Resource Management"
  },
  {
    "id": 89,
    "term": "Acquire Resources",
    "answer": "The process of obtaining team members, facilities, equipment, materials, supplies, and other resources necessary to complete project work.",
    "category": "Project Resource Management"
  },
  {
    "id": 90,
    "term": "Multi-Criteria Decision Analysis",
    "answer": "A tool used to rate potential resources based on criteria such as availability, cost, experience, ability, and skills.",
    "category": "Project Resource Management"
  },
  {
    "id": 91,
    "term": "Virtual Teams",
    "answer": "Groups of people with a shared goal who fulfill their roles with little or no time spent meeting face-to-face, enabled by technology.",
    "category": "Project Resource Management"
  },
  {
    "id": 92,
    "term": "Develop Team",
    "answer": "The process of improving competencies, team member interaction, and the overall team environment to enhance project performance.",
    "category": "Project Resource Management"
  },
  {
    "id": 93,
    "term": "Tuckman Ladder",
    "answer": "A model describing 5 stages of team development: Forming, Storming, Norming, Performing, and Adjourning.",
    "category": "Project Resource Management"
  },
  {
    "id": 94,
    "term": "Colocation",
    "answer": "An organizational placement strategy where project team members are physically located close to one another to improve communication and working relationships.",
    "category": "Project Resource Management"
  },
  {
    "id": 95,
    "term": "Manage Team",
    "answer": "The process of tracking team member performance, providing feedback, resolving issues, and managing team changes to optimize project performance.",
    "category": "Project Resource Management"
  },
  {
    "id": 96,
    "term": "Conflict Management Techniques",
    "answer": "Methods to handle team conflicts, including Withdraw/Avoid, Smooth/Accommodate, Compromise/Reconcile, Force/Direct, and Collaborate/Problem Solve.",
    "category": "Project Resource Management"
  },
  {
    "id": 97,
    "term": "Control Resources",
    "answer": "The process of ensuring that the physical resources assigned and allocated to the project are available as planned, and monitoring resource usage against the plan.",
    "category": "Project Resource Management"
  },
  {
    "id": 98,
    "term": "Plan Communications Management",
    "answer": "The process of developing an appropriate approach and plan for project communications activities based on the information needs of each stakeholder or group.",
    "category": "Project Communications Management"
  },
  {
    "id": 99,
    "term": "Communication Channels Formula",
    "answer": "A formula used to calculate total communication lines given 'n' stakeholders: n * (n - 1) / 2.",
    "category": "Project Communications Management"
  },
  {
    "id": 100,
    "term": "Interactive vs. Push vs. Pull Communication",
    "answer": "Interactive is multidimensional (meetings); Push is sent to specific recipients (emails, memos); Pull is placed in central repositories for recipients to access at their security discretion (intranet websites).",
    "category": "Project Communications Management"
  },
  {
    "id": 101,
    "term": "Manage Communications",
    "answer": "The process of ensuring timely and appropriate collection, creation, distribution, storage, retrieval, management, monitoring, and ultimate disposition of project information.",
    "category": "Project Communications Management"
  },
  {
    "id": 102,
    "term": "Monitor Communications",
    "answer": "The process of ensuring the information needs of the project and its stakeholders are met throughout the project life cycle.",
    "category": "Project Communications Management"
  },
  {
    "id": 103,
    "term": "Plan Risk Management",
    "answer": "The process of defining how to conduct risk management activities for a project.",
    "category": "Project Risk Management"
  },
  {
    "id": 104,
    "term": "Risk Management Plan",
    "answer": "A component of the project management plan that describes how risk management activities will be structured, performed, and categorized.",
    "category": "Project Risk Management"
  },
  {
    "id": 105,
    "term": "Risk Breakdown Structure (RBS)",
    "answer": "A hierarchical representation of potential sources of risk used to categorize and structure identify risks.",
    "category": "Project Risk Management"
  },
  {
    "id": 106,
    "term": "Identify Risks",
    "answer": "The process of identifying individual project risks as well as sources of overall project risk, and documenting their characteristics.",
    "category": "Project Risk Management"
  },
  {
    "id": 107,
    "term": "Risk Register",
    "answer": "A central project document where the outputs of risk management processes are registered, including identified risks, potential responses, and root causes.",
    "category": "Project Risk Management"
  },
  {
    "id": 108,
    "term": "Risk Report",
    "answer": "A project document that summarizes information on sources of overall project risk, together with summary information on identified individual project risks.",
    "category": "Project Risk Management"
  },
  {
    "id": 109,
    "term": "Perform Qualitative Risk Analysis",
    "answer": "The process of prioritizing individual project risks for further analysis or action by assessing their probability of occurrence and impact.",
    "category": "Project Risk Management"
  },
  {
    "id": 110,
    "term": "Probability and Impact Matrix",
    "answer": "A grid for mapping the probability of each risk occurrence and its impact on project objectives if that risk occurs, used to rank risk priority.",
    "category": "Project Risk Management"
  },
  {
    "id": 111,
    "term": "Perform Quantitative Risk Analysis",
    "answer": "The process of numerically analyzing the combined effect of identified individual project risks and other sources of uncertainty on overall project objectives.",
    "category": "Project Risk Management"
  },
  {
    "id": 112,
    "term": "Monte Carlo Analysis",
    "answer": "A computer-based quantitative simulation technique that computes the project model many times to evaluate the probability of achieving specific cost or schedule targets.",
    "category": "Project Risk Management"
  },
  {
    "id": 113,
    "term": "Decision Tree Analysis",
    "answer": "A diagramming and calculation technique used to evaluate option choices under uncertainty by calculating Expected Monetary Value (EMV).",
    "category": "Project Risk Management"
  },
  {
    "id": 114,
    "term": "Plan Risk Responses",
    "answer": "The process of developing options, selecting strategies, and agreeing on actions to address overall project risk exposure and treat individual project risks.",
    "category": "Project Risk Management"
  },
  {
    "id": 115,
    "term": "Strategies for Threats",
    "answer": "The five core strategic choices for handling negative risks: Escalate, Avoid, Transfer, Mitigate, and Accept.",
    "category": "Project Risk Management"
  },
  {
    "id": 116,
    "term": "Strategies for Opportunities",
    "answer": "The five core strategic choices for handling positive risks: Escalate, Exploit, Share, Enhance, and Accept.",
    "category": "Project Risk Management"
  },
  {
    "id": 117,
    "term": "Implement Risk Responses",
    "answer": "The process of ensuring that agreed-upon risk response actions are executed as planned in order to manage overall project risk exposure.",
    "category": "Project Risk Management"
  },
  {
    "id": 118,
    "term": "Monitor Risks",
    "answer": "The process of monitoring the implementation of agreed-upon risk response plans, tracking identified risks, identifying new risks, and evaluating risk process effectiveness.",
    "category": "Project Risk Management"
  },
  {
    "id": 119,
    "term": "Risk Audit",
    "answer": "A type of audit used to examine and document the effectiveness of the risk responses in dealing with identified risks and their root causes.",
    "category": "Project Risk Management"
  },
  {
    "id": 120,
    "term": "Plan Procurement Management",
    "answer": "The process of documenting project procurement decisions, specifying the approach, and identifying potential sellers.",
    "category": "Project Procurement Management"
  }
]