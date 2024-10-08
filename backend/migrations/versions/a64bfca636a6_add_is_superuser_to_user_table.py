"""add is superuser to user table

Revision ID: a64bfca636a6
Revises: 87bdaebd4785
Create Date: 2024-10-06 20:31:41.206208

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = 'a64bfca636a6'
down_revision = '87bdaebd4785'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_superuser', sa.Boolean(), nullable=True, default=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_superuser')
    # ### end Alembic commands ###
