"""Add predefined values to Profession table

Revision ID: 96fb625ab2d1
Revises: 0d2f64d8c0fe
Create Date: 2023-03-14 11:26:35.322808

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '96fb625ab2d1'
down_revision = '0d2f64d8c0fe'
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


def upgrade():
    # Create Profession table
    profession_table = op.create_table(
        'profession',
        sa.MetaData(),
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(100), unique=True, nullable=False)
    )

    # Create UserDetail table
    op.create_table(
        'user_detail',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('profession_id', sa.Integer(), sa.ForeignKey('profession.id'), nullable=True),
        sa.Column('bio', sa.Text(), nullable=True)
    )

    # Insert predefined values into the Profession table
    op.bulk_insert(
        profession_table,
        [{'name': profession} for profession in PROFESSIONS]
    )


def downgrade():
    op.drop_table('profession')
    op.drop_table('user_detail')
