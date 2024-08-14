"""bulk insert professions

Revision ID: 2dcdc92cdf18
Revises: d70fa46aa2b2
Create Date: 2023-03-15 21:50:01.258573

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2dcdc92cdf18'
down_revision = 'd70fa46aa2b2'
branch_labels = None
depends_on = None


PROFESSIONS = [
    'AI Developer',
    'Application Developer',
    'Blockchain Developer',
    'Cloud Architect',
    'Computer Hardware Engineer',
    'Computer Network Architect',
    'Cyber Security Analyst',
    'Data Analyst',
    'Data Architect',
    'Data Engineer',
    'Data Scientist',
    'Database Administrator',
    'DevOps Engineer',
    'Digital Marketing Specialist',
    'Enterprise Architect',
    'Front-end Developer',
    'Full-stack Developer',
    'Game Developer',
    'Information Security Analyst',
    'IT Consultant',
    'IT Manager',
    'IT Security Manager',
    'Machine Learning Engineer',
    'Mobile App Developer',
    'Network Administrator',
    'Project Manager',
    'Quality Assurance Tester',
    'Search Engine Optimization (SEO) Specialist',
    'Software Developer',
    'Software Engineer',
    'Solution Architect',
    'Systems Administrator',
    'Systems Analyst',
    'Technical Writer',
    'UI Designer',
    'UX Designer',
    'Video Game Designer',
    'Virtual Reality Developer',
    'Web Developer',
    'Webmaster',
]


def upgrade() -> None:
    profession_table = sa.Table(
        'profession',
        sa.MetaData(),
        sa.Column('profession_id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(100), unique=True, nullable=False)
    )

    # Insert predefined values into the Profession table
    op.bulk_insert(
        profession_table,
        [{'name': profession} for profession in PROFESSIONS]
    )


def downgrade() -> None:
    op.execute("DELETE FROM professions WHERE name IN (%s)" % ', '.join(
        f"'{profession}'" for profession in PROFESSIONS))
