// src/pages/DonationPage.jsx
import React, { useState } from 'react';
import { Card, Button, Form, Modal, Alert } from 'react-bootstrap';

function DonationPage() {
    const [donationAmount, setDonationAmount] = useState('');
    const [selectedOrganization, setSelectedOrganization] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalVariant, setModalVariant] = useState('success');
    const [currentDonationTarget, setCurrentDonationTarget] = useState(null);

    // Predefined, common humanitarian and cultural organizations in Sri Lanka
    const commonOrganizations = [
        {
            id: 'cancer-hospital',
            name: 'Apeksha Hospital (National Cancer Hospital)',
            description: 'Apeksha Hospital is the premier cancer treatment and research facility in Sri Lanka. Donations directly support patient care, critical equipment, and medical supplies for cancer patients.',
            website: 'https://www.apeksahospital.lk/' // Please verify the actual official website
        },
        {
            id: 'childrens-hospital',
            name: 'Lady Ridgeway Hospital for Children (LRH)',
            description: 'Lady Ridgeway Hospital for Children is the largest tertiary care children\'s hospital in Sri Lanka. Contributions help provide essential medical care, specialized treatments, and facilities for children nationwide.',
            website: 'https://lrh.health.gov.lk/' // Please verify the actual official website
        },
        {
            id: 'elderly-care',
            name: 'HelpAge Sri Lanka',
            description: 'HelpAge Sri Lanka is dedicated to supporting disadvantaged elderly individuals across the island. Donations assist with medical care, provision of spectacles, and maintenance of elder care homes.',
            website: 'https://helpagesl.org/' // Please verify the actual official website
        },
        {
            id: 'disaster-relief',
            name: 'Sri Lanka Red Cross Society',
            description: 'The Sri Lanka Red Cross Society provides crucial humanitarian aid, disaster relief, and essential health services to vulnerable communities throughout Sri Lanka, especially during emergencies.',
            website: 'https://www.redcross.lk/' // Please verify the actual official website
        },
        {
            id: 'cultural-heritage',
            name: 'Department of Archaeology, Sri Lanka',
            description: 'Support the preservation and conservation of Sri Lanka\'s rich archaeological heritage, including ancient temples, ruins, and historical sites, ensuring their survival for future generations.',
            website: 'http://www.archaeology.gov.lk/' // Example, official donation channel might differ
        }
    ];

    // Handles the main donation form submission
    const handleDonationSubmit = (e) => {
        e.preventDefault();
        if (!donationAmount || !selectedOrganization) {
            setModalMessage('Please enter a donation amount and select an organization.');
            setModalVariant('danger');
            setShowModal(true);
            return;
        }

        const amount = parseFloat(donationAmount);
        if (isNaN(amount) || amount <= 0) {
            setModalMessage('Please enter a valid positive donation amount.');
            setModalVariant('danger');
            setShowModal(true);
            return;
        }

        // --- PAYMENT GATEWAY INTEGRATION POINT ---
        

        // Simulate a successful donation for demonstration
        console.log(`Simulating donation of LKR ${amount} to ${currentDonationTarget?.name || selectedOrganization}`);
        setModalMessage(`Thank you for your generous donation of LKR ${amount} to ${currentDonationTarget?.name || selectedOrganization}! Your contribution makes a real difference.`);
        setModalVariant('success');
        setShowModal(true);

        // Reset form fields
        setDonationAmount('');
        setSelectedOrganization('');
        setCurrentDonationTarget(null);
    };

    // Sets the selected organization in the form when a "Donate" button on a card is clicked
    const handleSelectOrganizationForDonation = (orgId, orgName) => {
        setSelectedOrganization(orgId);
        setCurrentDonationTarget({ id: orgId, name: orgName });
        // Scrolls to the top donation form for user convenience
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Support Cultural & Humanitarian Initiatives</h1>
            <p className="text-center text-muted mb-5">
                Your generous contributions help preserve Sri Lanka's rich cultural heritage and support vital community services for those in need.
            </p>

   {/* Main Donation Form */}
   <div className="row justify-content-center"> {/* Centers the column horizontally */}
    <div className="col-12 col-md-8 col-lg-6"> {/* Sets column width: full on small, 8/12 on medium, 6/12 on large */}
      <Card className="mb-5 shadow-sm">
        <Card.Header as="h3" className="text-center bg-primary text-white">Make a Donation</Card.Header>
          <Card.Body>
            <Form onSubmit={handleDonationSubmit}>
             <Form.Group className="mb-3">
             <Form.Label htmlFor="donationAmount">Donation Amount (LKR)</Form.Label>
             <Form.Control
                 type="number"
                 id="donationAmount"
                 placeholder="e.g., 500, 1000, 5000"
                 value={donationAmount}
                 onChange={(e) => setDonationAmount(e.target.value)} min="1" required />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label htmlFor="selectOrganization">Donate to:</Form.Label>
                <Form.Control
                  as="select"
                  id="selectOrganization"
                  value={selectedOrganization}
                  onChange={(e) => {const selectedOrg = commonOrganizations.find(org => org.id === e.target.value);
                                    setSelectedOrganization(e.target.value);
                                    setCurrentDonationTarget(selectedOrg ? { id: selectedOrg.id, name: selectedOrg.name } : null);
                                }}
                              required
                            >
                 <option value="">Select an organization or cause</option>
                  {commonOrganizations.map(org => (
                    <option key={org.id} value={org.id}>
                     {org.name}
                    </option> ))}
               </Form.Control>
                 {currentDonationTarget && (
                  <Alert variant="info" className="mt-2">
                     You are donating to: <strong>{currentDonationTarget.name}</strong> </Alert>)}
                </Form.Group>

                <Button variant="success" type="submit" className="w-100"> Donate Now </Button>
                </Form>
        </Card.Body>
      </Card>
    </div>
    </div>

            {/* Section for Common Humanitarian & Cultural Organizations */}
            <h2 className="text-center mb-4 text-primary">Explore Featured Organizations in Sri Lanka</h2>
            <p className="text-center text-muted mb-4">
                These are some of the reputable organizations making a significant impact in Sri Lanka's humanitarian and cultural sectors. Click "Donate" to pre-select them in the form above.
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mb-5">
                {commonOrganizations.map(org => (
                    <div key={org.id} className="col">
                        <Card className="h-100 shadow-sm">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{org.name}</Card.Title>
                                <Card.Text className="flex-grow-1">{org.description}</Card.Text>
                                {org.website && (
                                    <p className="mb-2">
                                        <a href={org.website} target="_blank" rel="noopener noreferrer" className="card-link">Visit Website</a>
                                    </p>
                                )}
                                <Button
                                    variant="outline-primary"
                                    onClick={() => handleSelectOrganizationForDonation(org.id, org.name)}
                                    className="mt-auto"
                                >
                                    Donate to {org.name}
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Donation Confirmation Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Donation Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant={modalVariant}>
                        {modalMessage}
                    </Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DonationPage;    