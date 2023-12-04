"""change is_active to false

Revision ID: 87bdaebd4785
Revises: 7e377dd0480c
Create Date: 2023-10-25 13:12:01.243701

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '87bdaebd4785'
down_revision = '7e377dd0480c'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
                    existing_type=sa.BOOLEAN(),
                    nullable=True,
                    existing_server_default=sa.text('true'))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'is_active',
                    existing_type=sa.BOOLEAN(),
                    nullable=False,
                    existing_server_default=sa.text('true'))
    # ### end Alembic commands ###
